# Software-based Artwork: Code Structure vs. Aesthetic Output

This p5.js sketch demonstrates why static source code analysis is insufficient for software-based artworks.
While traditional software engineering (SE) relies on Abstract Syntax Trees (ASTs), control flow graphs, and code metrics to evaluate and classify software, this project illustrates how code with high structural identity produces radically divergent visual and perceptual phenomena at runtime.

## Overview
The sketch runs a side-by-side comparison driven by the same core nested loop matrix (12×12) and the same underlying mathematical signal (`wave=sin(dist)+cos(angle)`):

| FLUID (left) | GEOMETRY (right) |
| :--- | :--- |
| Continuous Cartesian Offset | Polar Symmetry & Rotational Mapping |
| Smooth wave field, organic flow | Crystalline mandala, polar symmetry |
| Single-pass spatial displacement | Rotational symmetry loop per cell |
| Smooth parametric circles | Rotated square matrices |
