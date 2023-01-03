import torch
from tqdm import tqdm
import numpy as np
from matplotlib import figure
import matplotlib.gridspec as gridspec
import matplotlib.pyplot as plt
from PIL import Image
from os.path import basename
import json

d = torch.load('newout.pt')
dd = dict()
for i in tqdm(d):
    for j in d[i]:
        dd[i] = list()
        if (j[1] > 0.92):
            dd[i].append(j)
d = dict()
for i in dd:
    if (len(dd[i]) > 0):
        d[i] = dd[i]
dd = d
print("cleaned")
# torch.save(dd, "newout2.pt")
# uset = list()
# aset = list()
# for i in tqdm(dd):
#     uset.append(i)
#     aset.append(i)
#     for j in dd[i]:
#         aset.append(j[0])
# with open("uset.txt", "w") as f:
#     f.write("\n".join(uset))
# with open("aset.txt", "w") as f:
#     f.write("\n".join(aset))


dd = dict()
alist = list()
for i in d:
    for j in d[i]:
        if (j[0]not in alist):
            alist.append(j[0])
            dd[j[0]] = list()
        dd[j[0]].append((i, j[1]))
print("reversed")
uset = list()
aset = list()
for i in tqdm(dd):
    uset.append(i)
    aset.append(i)
    for j in dd[i]:
        aset.append(j[0])
with open("uset2.txt", "w") as f:
    f.write("\n".join(uset))
with open("aset2.txt", "w") as f:
    f.write("\n".join(aset))
print('breakpoint')


def p(path, dd):
    n_ims = len(dd[path])
    ncols = 4  # fixed for a consistent layout
    nrows = int(np.ceil(n_ims / ncols)) + 1
    fig = figure.Figure(figsize=(10, 14))
    gs = gridspec.GridSpec(nrows=nrows, ncols=ncols)
    ax = plt.subplot(
        gs[0, 1:3]
    )  # Always plot the original image in the middle of top row
    ax.imshow(Image.open(path))
    ax.set_title('Original Image: {}'.format(basename(path)))
    ax.axis('off')
    for i in range(0, n_ims):
        row_num = (i // ncols) + 1
        col_num = i % ncols
        ax = plt.subplot(gs[row_num, col_num])
        ax.imshow(Image.open(dd[path][i][0]))
        val = dd[path][i][1]
        title = ' '.join([dd[path][i][0], f'({val})'])
        ax.set_title(title, fontsize=6)
        ax.axis('off')
    gs.tight_layout(fig)
    plt.savefig(basename(path))


# for i in tqdm(dd):
#     p(i, dd)
with open('dif.js','w') as f:
    f.write('dic=')
    f.write(json.dumps(dd))