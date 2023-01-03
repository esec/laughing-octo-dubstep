import torch
from tqdm import tqdm
import numpy as np
book = torch.load('savepointx.pt')
wild = torch.load('wildx.pt')
print("reference: ", len(book), ", target: ", len(wild))
cache_b = dict()
cache_w = dict()
for i in tqdm(wild):
    cache_w[i] = np.linalg.norm(wild[i])
for i in tqdm(book):
    cache_b[i] = np.linalg.norm(book[i])
save_pt = dict()
for i in tqdm(wild, position=0):
    save_pt[i] = list()
    for j in tqdm(book, position=1, leave=False):
        vec_a = wild[i]
        vec_b = book[j]
        norm = cache_w[i] * cache_b[j]
        cossim = np.inner(vec_a, vec_b) / norm
        cossim = float(cossim)
        if (cossim > 0.9):
            file_a = wild[i]
            file_b = book[j]
            save_pt[i].append((j, cossim))
torch.save(save_pt, "newout.pt")
