/* eslint-disable no-undef */
import React from 'react';
import { render, cleanup } from "@testing-library/react";
import Dictionary from "../components/views/dictionary.view";

describe('Dictionary view', () => {
  afterEach(cleanup);
  test('Should not render definition component when no word selected', () => {
    const props = '';

    const { getByText } = render(
      <Dictionary definition={props}/>
    );

    const textRendered = getByText('No word selected');
    expect(textRendered).toBeDefined();
  });

  test('Component should render properly if valid props are supplied', () => {
    const props = {
      word: 'google',
      definition: 'google is a search engine',
      google: 'how'
    };

    const { getByText } = render(
      <Dictionary definition={props}/>
    );

    const textRendered = getByText('google is a search engine');
    expect(textRendered).toBeDefined();
  });
});

