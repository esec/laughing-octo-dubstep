from sklearn.metrics.pairwise import cosine_similarity
from torch.nn.functional import cosine_similarity as torch_cos
import torch
import numpy as np
from timeit import timeit
from scipy.spatial import distance


# Vectors
vec_a = [1., 2., 3., 4., 5.]
vec_b = [1., 3., 5., 7., 9.]
npa=np.array(vec_a)
npb=np.array(vec_b)

helper_vec = np.asarray([vec_a, vec_b])


def ref_cossim(vec_a: list, vec_b: list) -> float:
    # Dot and norm
    dot = sum(a*b for a, b in zip(vec_a, vec_b))
    norm_a = sum(a*a for a in vec_a) ** 0.5
    norm_b = sum(b*b for b in vec_b) ** 0.5

    # Cosine similarity
    cos_sim = dot / (norm_a*norm_b)
    return cos_sim


def cossim(a, b): return np.inner(a, b)/(np.linalg.norm(a)*np.linalg.norm(b))
def cossimdot(a, b): return np.dot(a, b)/(np.linalg.norm(a)*np.linalg.norm(b))
def cossim3(a, b): return np.matmul(a, b)/(np.linalg.norm(a)*np.linalg.norm(b))


def cossim4(x, y): return np.dot(x, y) / \
    (np.sqrt(np.dot(x, x))*np.sqrt(np.dot(y, y)))


def fast_similarity(ratings, epsilon=1e-9):
    # epsilon -> small number for handling dived-by-zero errors
    sim = ratings.T.dot(ratings) + epsilon
    norms = np.array([np.sqrt(np.diagonal(sim))])
    return (sim / norms / norms.T)


def scipycos(a, b): return 1-distance.cosine(a, b)


# Results
print(ref_cossim(vec_a, vec_b))
print(timeit('ref_cossim(vec_a, vec_b)', globals=locals(), number=10000))
# 0.04117130000000002

# print(cosine_similarity([vec_a], [vec_b]))
# print(timeit('cosine_similarity([vec_a], [vec_b])',
#       globals=locals(), number=10000))
# 2.432857 droped

print(torch_cos(torch.tensor(vec_a), torch.tensor(vec_b), dim=0))
print(timeit('torch_cos(torch.tensor(vec_a),torch.tensor(vec_b), dim=0)',
      globals=locals(), number=10000))
# 0.4354952000000001

# tmpa = torch.tensor(vec_a, device='dml')
# tmpb = torch.tensor(vec_b, device='dml')
# print(torch_cos(tmpa, tmpb, dim=0).to('cpu'))
# print(timeit('torch_cos(tmpa,tmpb, dim=0)', globals=locals(), number=10000))
# 2.6163005000000004 due to gpu job is not in async, need another benchmark framwork

print(cossim(vec_a, vec_b))
print(timeit('cossim(vec_a, vec_b)', globals=locals(), number=10000))
# 0.1676419

# print(cossimdot(vec_a, vec_b))
# print(timeit('cossimdot(vec_a, vec_b)', globals=locals(), number=10000))
# 0.17353309999999977 should be same across np

# print(cossim3(vec_a, vec_b))
# print(timeit('cossim3(vec_a, vec_b)', globals=locals(), number=10000))
# 0.20463200000000015 should be same across np

# print(cossim4(vec_a, vec_b))
# print(timeit('cossim4(vec_a, vec_b)', globals=locals(), number=10000))
# 0.19972170000000045 still same across all np version

# print(fast_similarity(helper_vec))
# print(timeit('fast_similarity(helper_vec)', globals=locals(), number=10000))
# inf only works when vec_a == vec_b

# print(scipycos(vec_a, vec_b))
# print(timeit('scipycos(vec_a, vec_b)', globals=locals(), number=10000))
# 0.7651707999999999 0.3x faster than np

print(ref_cossim(npa, npb))
print(timeit('ref_cossim(npa, npb)', globals=locals(), number=10000))
# 0.14092700000000002 what...
