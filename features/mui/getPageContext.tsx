import { SheetsRegistry, GenerateClassName } from 'jss';
import { StylesCreator } from '@material-ui/core/styles/withStyles';
import { createMuiTheme, createGenerateClassName, Theme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';

export interface MUIPageContext {
  theme: Theme;
  sheetsManager: Map<StylesCreator, Map<Theme, any>>;
  sheetsRegistry: SheetsRegistry;
  generateClassName: GenerateClassName;
}

// A theme with custom primary and secondary color.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
    },
    secondary: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
    },
    background: {
      default: '#ffffff'
    }
  },
  typography: {
    useNextVariants: true,
  },
});

function createPageContext(): MUIPageContext {
  return {
    theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!(process as any).browser) {
    return createPageContext();
  }

  // Reuse context on the client-side.
  if (!(global as any).__INIT_MATERIAL_UI__) {
    (global as any).__INIT_MATERIAL_UI__ = createPageContext();
  }

  return (global as any).__INIT_MATERIAL_UI__;
}