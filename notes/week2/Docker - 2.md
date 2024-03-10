### Layers in Dockerfile:
- Layers are a fundamental part of the image architecture that allows Docker to be efficient, fast and portable. A Docker image is essentially built up on a series of layers, each repr a set of differences from the previous layer.
- They run one after the other.
- Base Layer, Instruction Layer, Reusuable and sharable, immutable.
- if there are multiple layers, the previous layer result can be shared togehter with iamges and also cached.
- A Docker image is essentially a series of layers,that have some differences from the previous layer.