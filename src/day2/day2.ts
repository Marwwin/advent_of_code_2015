import { removeIndex } from "../Utility/Filters";
import { applyFuncsAndSum } from "../Utility/Mappers";
import {
  funcSum,
  product,
  sum,
  sumOfSquares,
} from "../Utility/Reducers";

type TRectangle = [l: number, w: number, h: number];

export function calculateTotalArea(input: string) {
  return input
    .split("\n")
    .map(parseRectangleString)
    .reduce(funcSum(getWrappingPaper), 0);
}

export function calculateTotalRibbon(input: string) {
  const result = input
    .split("\n")
    .map(parseRectangleString)
    .map(applyFuncsAndSum(getWrappingRibbon, getBowRibbon))
    .reduce(sum, 0);
  return result;
}

export function getWrappingPaper(rectangle: TRectangle) {
  return getArea(rectangle) + getSmallestSide(rectangle);
}

function getArea(rectangle: TRectangle) {
  const [l, w, h] = rectangle;
  return 2 * l * w + 2 * w * h + 2 * h * l;
}

export function getWrappingRibbon(rectangle: TRectangle) {
  return get2SmallestSides(rectangle).reduce(sumOfSquares, 0);
}

export function getBowRibbon(rectangle: TRectangle) {
  return rectangle.reduce(product);
}

export function getSmallestSide(rectangle: TRectangle) {
  return get2SmallestSides(rectangle).reduce(product);
}

function parseRectangleString(string: string) {
  return string.split("x").map(Number) as TRectangle;
}

function get2SmallestSides(rectangle: TRectangle) {
  const largestN = Math.max(...rectangle);
  return rectangle.filter(removeIndex(rectangle.indexOf(largestN)));
}
