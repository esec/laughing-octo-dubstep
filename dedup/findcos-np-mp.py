import torch
# from torch.nn.functional import cosine_similarity as cos_sim
from tqdm import tqdm
import numpy as np
from multiprocessing import freeze_support
from tqdm.contrib.concurrent import process_map

c

def cossim(a, b): return np.inner(a, b)/(np.linalg.norm(a)*np.linalg.norm(b))


# for i in tqdm(wildcard, position=0, desc='step1'):
def step1(i: set) -> tuple:
    # step1pos = i == len(wildcard) - 1
    vec_a = i.pop()
    file_a = i.pop()
    if (not type(vec_a) == tyepcheck):
        vec_a, file_a = file_a, vec_a
    vec_a = np.asarray(vec_a)
    # for j in tqdm(bookshelf, position=1, leave=step1pos, desc='step2'):
    for j in wildcard:
        copyj = iter(j)
        vec_b = next(copyj)
        file_b = next(copyj)
        if (not type(vec_b) == tyepcheck):
            vec_b, file_b = file_b, vec_b
        vec_b = np.asarray(vec_b)
        dup_rate = cossim(vec_a, vec_b)
        if (dup_rate >= 0):
            file_a = str(file_a)
            file_b = str(file_b)
            # dup_rate = np.float32(dup_rate)
            return (file_a, file_b, dup_rate)
            # cosoutput[file_a] = [(file_b, dup_rate)]


tyepcheck = type(torch.tensor(0))
wildcard = torch.load('wild.pt')

if __name__ == '__main__':
    freeze_support()
    bookshelf = torch.load('savepoint.pt')
    print("reference: ", len(bookshelf), ", target: ", len(wildcard))
    d = process_map(step1, bookshelf, max_workers=3, chunksize=99)
    final_output = dict()
    print('found ', len(final_output))
    for i in tqdm(d):
        if (len(i) > 0):
            final_output[i[0]] = [(i[1], i[2])]
    torch.save(final_output, 'forplot.pt')
