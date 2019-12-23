/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from "@testing-library/react";
import Movie from "../components/views/movie.view";

describe('Movie view', () => {
  afterEach(cleanup);
  test('Loading indication must be displayed when movies are not yet loaded', () => {
    const props = {
    };

    const { getByText } = render(
      <Movie movie={props}/>
    );

    const textRendered = getByText('Loading...');
    expect(textRendered).toBeDefined();
  });

  test('Movie Component can render properly', () => {
    const props = {
      show: {
        name: 'google',
        summary: 'google is a search engine'
      }
    };

    const { getByText } = render(
      <Movie movie={props}/>
    );

    const textRendered = getByText('google');
    expect(textRendered).toBeDefined();
  });
});

