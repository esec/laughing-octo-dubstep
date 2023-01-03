import torch
import numpy
from multiprocessing import freeze_support
from tqdm.contrib.concurrent import process_map
from tqdm import tqdm

old_data = torch.load('wild.pt')
sample_type = type(torch.tensor(0))


def convert_fashion(chunk: list) -> dict:
    vec = chunk.pop()
    file = chunk.pop()
    if (not type(vec) == sample_type):
        vec, file = file, vec
    file = str(file)
    vec = numpy.asarray(vec)
    return [file, vec]


if __name__ == '__main__':
    freeze_support()
    d = process_map(convert_fashion, old_data, max_workers=3, chunksize=99)
    final_output = dict()
    for i in tqdm(d):
        final_output[i[0]] = i[1]
    torch.save(final_output, 'wildx.pt')
