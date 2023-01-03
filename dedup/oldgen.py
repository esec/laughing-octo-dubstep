from imagededup.methods import CNN
import torch
c=CNN()
d=c.encode_images(image_dir="data")
torch.save(d,'enc.pt')
print('done')
# top: dict
#  key: str filename
#  value: ndarray 1000x float