import torch
# from torch.nn.functional import cosine_similarity as cos_sim
from tqdm import tqdm
import numpy as np


def cossim(a, b): return np.inner(a, b)/(np.linalg.norm(a)*np.linalg.norm(b))


bookshelf = torch.load('savepoint.pt')
wildcard = torch.load('wild.pt')
print("reference: ", len(bookshelf), ", target: ", len(wildcard))
cosoutput = dict()
erra = 0
errb = 0
tyepcheck = type(torch.tensor(0))
for i in tqdm(wildcard, position=0, desc='step1'):
    step1pos = i == len(wildcard) - 1
    vec_a = i.pop()
    file_a = i.pop()
    if (not type(vec_a) == tyepcheck):
        vec_a, file_a = file_a, vec_a
        erra += 1
    vec_a = np.asarray(vec_a)
    for j in tqdm(bookshelf, position=1, leave=step1pos, desc='step2'):
        copyj = iter(j)
        vec_b = next(copyj)
        file_b = next(copyj)
        if (not type(vec_b) == tyepcheck):
            vec_b, file_b = file_b, vec_b
            errb += 1
        vec_b = np.asarray(vec_b)
        dup_rate = cossim(vec_a, vec_b)
        if (dup_rate >= 0.9):
            file_a = str(file_a)
            file_b = str(file_b)
            # dup_rate = np.float32(dup_rate)
            cosoutput[file_a].append((file_b, dup_rate))
print('found ', len(cosoutput))
torch.save(cosoutput, 'forplot.pt')
print('a: ', erra, ' b: ', errb)
