/* eslint no-console: ["error", { allow: ["log"] }] */

import {
  reduce, find, map, toPairs, zipObj, compose, curry, merge,
  mergeWith, prop, propOr, propEq, indexBy, reduceBy
} from 'ramda';

// Merge two objects with same key
// {"1":{}, "2":{}} + {"1":{}, "2":{}} => {"1":{}+{}, "2":{}+{}}
export const propMerge = curry((k1, k2, xs1, xs2) =>
  mergeWith(
    merge, indexBy(prop(k1), xs1), indexBy(prop(k2), xs2)
  )
);

// Reduce function. Concat a object to simple array given prop
// [{k: v1}, {k, v2}] => [v1, v2]
export const concatByProp = curry((key, acc, x) => ([ ...acc, x[key] ]));

// Group and concate by key.
// [{k: v},{k, v}] => [{s: f(k,v)}]
export const reduceByProp = curry((key, key2) =>
  reduceBy(concatByProp(key), [], prop(key2))
);

// Convert a object to a collection
// {k:v} => [{key:k, value:v}]
export const objToColl = curry((key, value) =>
compose(
  map(zipObj([ key, value ])),
  toPairs
));

// Log any input and return it
export const log = curry((note, input) => {
  console.log(`${note} ---`);
  console.log(input);
  console.log('---');
  return input;
});

// Find by key and value and select if not found return default
// {kf:vf, ks:vs} => vs|def
export const findAndSelect = curry((def, keySelect, keyFind, valueFind, obj) => (
compose(
  propOr(def, keySelect),
  find(propEq(keyFind, valueFind))
)(obj)
));

// Sort by pattern and key reduce by key select, if not found replace with pattern
export const sortByOr = curry((def, keySelect, keyFind, pattern, obj) => (
  reduce(
    (acc, x) => [ ...acc, findAndSelect(def, keySelect, keyFind, x, obj) ],
    [],
    pattern
  )
));
