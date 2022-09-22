game lives in row, not grid. stack as many rows as attempts, grid calls the game.

rows should be independent, own details, report submit, rerender separately
grid should manage overall gamestate, game init inputs, lang, dir

draggable elements? => use layout component early
rerendering entire grid on every input is lazy => row at most
some grid data may be received from header, app => lang, cookie data