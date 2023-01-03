from imagededup.methods import CNN
import torch
c = CNN()
e = torch.load('enc.pt')
d = c.find_duplicates(encoding_map=e, scores=True)
torch.save(d, 'en2.pt')
print(d)
