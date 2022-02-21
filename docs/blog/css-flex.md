# Flex 布局

## Flex 布局是什么？

Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。

## 容器的属性

以下 6 个属性设置在容器上。

- flex-direction 设置主轴的方向

  - row（默认值）：主轴为水平方向，起点在左端。
  - row-reverse：主轴为水平方向，起点在右端。
  - column：主轴为垂直方向，起点在上沿。
  - column-reverse：主轴为垂直方向，起点在下沿。

- flex-wrap 设置主轴的换行方式

  - nowrap（默认）：不换行。
  - wrap：换行，第一行在上方。
  - wrap-reverse：换行，第一行在下方

- flex-flow

  - flex-direction 和 flex-wrap 的组合。
  - `flex-flow: <flex-direction> || <flex-wrap>;`
  - 默认值为 row nowrap

- justify-content 设置项目在主轴上的对齐方式。具体对齐方式与轴的方向有关。下面假设主轴为从左到右。

  - flex-start（默认值）：左对齐
  - flex-end：右对齐
  - center： 居中
  - space-between：两端对齐，项目之间的间隔都相等。
  - space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

- align-items 设置项目在交叉轴上的对齐方式。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。

  - flex-start：交叉轴的起点对齐。
  - flex-end：交叉轴的终点对齐。
  - center：交叉轴的中点对齐。
  - baseline: 项目的第一行文字的基线对齐。
  - stretch（默认值）：如果项目未设置高度或设为 auto，将占满整个容器的高度。

- align-content 设置多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
  - flex-start：与交叉轴的起点对齐。
  - flex-end：与交叉轴的终点对齐。
  - center：与交叉轴的中点对齐。
  - space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  - space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  - stretch（默认值）：轴线占满整个交叉轴。

## 项目的属性

- order
  - 设置项目的排列顺序，数值越小，排列越靠前，默认为 0。
- flex-grow
  - 设置项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。
- flex-shrink
  - 设置项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。
- flex-basis
  - 定义了在分配多余空间之前，项目占据的主轴空间。它的默认值为 auto。
- flex
  - flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。
- align-self
  - 允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。
