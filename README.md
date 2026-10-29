# 3dtiles-samples

Small, static 3D Tiles 1.1 sample tilesets served from GitHub Pages (CORS `*`), for viewer bug reports and tests.

Base URL: `https://jo-chemla.github.io/3dtiles-samples/`

## lion_takanawa/implicit-octree

`lion_takanawa/implicit-octree/tileset.json`

The Potree `lion_takanawa` point cloud (from the [potree](https://github.com/potree/potree/tree/develop/pointclouds/lion_takanawa) repo) as an implicit OCTREE tileset, `refine: "ADD"`, root content at level 0, `subtreeLevels: 3`, 167 glTF point-cloud tiles (POSITION + COLOR_0), 128 subtree files, 7.8 MB total. Each level adds points to the parent; the geometric error is the Potree spacing, halving per level.

`lion_takanawa/implicit-octree/tileset-x100.json` is the same set of tiles with a root transform scale of 100 and the geometric errors scaled to match: the model is 464 m wide, so it is visible from a few hundred metres (viewers whose camera starts far out, such as the 3DTilesRendererJS kitchen sink at 690 m, show it immediately; zoom out past ~1 km and an additive-skip bug makes it vanish).

Produced by `3dtiled export --keep-implicit` from a [3dtiled](https://github.com/jo-chemla/3d-tiles-converters) stream of the original cloud, no depth cap.
