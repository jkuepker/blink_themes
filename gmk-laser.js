// exported as json from https://terminal.sexy
var theme = {
  color: [
    '#27214d', // #base02
    '#E9C8D3', // #red
    '#A9D400', // #green
    '#FCD23E', // #yellow
    '#C6E4E4', // #blue
    '#D42450', // #magenta
    '#00A7B5', // #cyan
    '#C2C3BE', // #base2
    '#60757B', // none tune bright color for zsh-autocompletion. See #381
    '#D95702', // #orange
    '#586e75', // base01
    '#657b83', // base00
    '#839496', // base0
    '#301D78', // #violet
    '#93A1A1', // #base1
    '#DADAD7', // #base3
  ],
  foreground: '#839496', // base0
  background: '#08040B', // #base03
};

term_applySexyTheme(theme);
term_set('cursor-color', 'rgba(131, 148, 150, 0.3)'); // base0
term_set('cursor-blink', false);