from pathlib import Path
from torchvision import transforms
from PIL import Image
import torch
from multiprocessing import freeze_support
from tqdm.contrib.concurrent import process_map


model = torch.hub.load('pytorch/vision:v0.9.0',
                       'mobilenet_v3_small', pretrained=True, verbose=False)
model.eval()
if torch.dml.is_available():
    model.to('dml')
img_list = [
    i.absolute()
    for i in Path("e:\\mi").glob('*')
    if not (i.name.startswith('.') or i.is_dir())
    if (i.name.endswith('g'))
]
preprocess = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406],
                         std=[0.229, 0.224, 0.225]),
])


def path_to_code(path):
    input_image = Image.open(path).convert('RGB')
    input_tensor = preprocess(input_image)
    # create a mini-batch as expected by the model
    input_batch = input_tensor.unsqueeze(0)
    # move the input and model to GPU for speed if available
    if torch.dml.is_available():
        input_batch = input_batch.to('dml')
    with torch.no_grad():
        output = model(input_batch)
    return {path, output[0].to('cpu')}


if __name__ == '__main__':
    freeze_support()
    d = process_map(path_to_code, img_list, max_workers=3, chunksize=99)
    print("FINISH: ", len(d))
    torch.save(d, 'wild.pt')

    # with Pool(cpu_count()) as p:
    #     d = p.map(path_to_code, img_list)
    #     print("FINISH: ", len(d))
    #     torch.save(d, 'savepoint.pt')
# Tensor of shape 1000, with confidence scores over Imagenet's 1000 classes
# print(len(output[0].to('cpu')))
