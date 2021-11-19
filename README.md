<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# incrnansumabs

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute a sum of absolute values incrementally, ignoring `NaN` values.

<section class="intro">

The sum of absolute values is defined as

<!-- <equation class="equation" label="eq:sum_absolute_values" align="center" raw="s = \sum_{i=0}^{n-1} |x_i|" alt="Equation for the sum of absolute values."> -->

<div class="equation" align="center" data-raw-text="s = \sum_{i=0}^{n-1} |x_i|" data-equation="eq:sum_absolute_values">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@0e5577a90290e63a58532d05ccc71fc8403c5d2d/lib/node_modules/@stdlib/stats/incr/nansumabs/docs/img/equation_sum_absolute_values.svg" alt="Equation for the sum of absolute values.">
    <br>
</div>

<!-- </equation> -->

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-incr-nansumabs
```

</section>

<section class="usage">

## Usage

```javascript
var incrnansumabs = require( '@stdlib/stats-incr-nansumabs' );
```

#### incrnansumabs()

Returns an accumulator `function` which incrementally computes a sum of absolute values, ignoring `NaN` values.

```javascript
var accumulator = incrnansumabs();
```

#### accumulator( \[x] )

If provided an input value `x`, the accumulator function returns an updated sum. If not provided an input value `x`, the accumulator function returns the current sum.

```javascript
var accumulator = incrnansumabs();

var sum = accumulator( 2.0 );
// returns 2.0

sum = accumulator( -1.0 );
// returns 3.0

sum = accumulator( NaN );
// returns 3.0

sum = accumulator( -3.0 );
// returns 6.0

sum = accumulator();
// returns 6.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Input values are **not** type checked. If non-numeric inputs are possible, you are advised to type check and handle accordingly **before** passing the value to the accumulator function.
-   For long running accumulations or accumulations of large numbers, care should be taken to prevent overflow.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var incrnansumabs = require( '@stdlib/stats-incr-nansumabs' );

var accumulator;
var v;
var i;

// Initialize an accumulator:
accumulator = incrnansumabs();

// For each simulated datum, update the sum...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.2 ) {
        v = NaN;
    } else {
        v = ( randu()*100.0 ) - 50.0;
    }
    accumulator( v );
}
console.log( accumulator() );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/stats/incr/nansum`][@stdlib/stats/incr/nansum]</span><span class="delimiter">: </span><span class="description">compute a sum incrementally, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/incr/nansumabs2`][@stdlib/stats/incr/nansumabs2]</span><span class="delimiter">: </span><span class="description">compute a sum of squared absolute values incrementally, ignoring NaN values.</span>
-   <span class="package-name">[`@stdlib/stats/incr/sumabs`][@stdlib/stats/incr/sumabs]</span><span class="delimiter">: </span><span class="description">compute a sum of absolute values incrementally.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-incr-nansumabs.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-incr-nansumabs

[test-image]: https://github.com/stdlib-js/stats-incr-nansumabs/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-incr-nansumabs/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-incr-nansumabs/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-incr-nansumabs?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-incr-nansumabs.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-incr-nansumabs/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-incr-nansumabs/main/LICENSE

<!-- <related-links> -->

[@stdlib/stats/incr/nansum]: https://github.com/stdlib-js/stats-incr-nansum

[@stdlib/stats/incr/nansumabs2]: https://github.com/stdlib-js/stats-incr-nansumabs2

[@stdlib/stats/incr/sumabs]: https://github.com/stdlib-js/stats-incr-sumabs

<!-- </related-links> -->

</section>

<!-- /.links -->
