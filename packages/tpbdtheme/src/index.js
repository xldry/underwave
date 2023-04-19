import Root from "./components"

const tpbdTheme = {
  name: "tpbdtheme",
  roots: {
    theme: Root
  },
  state: {
    theme: {
      isUrlVisible: true,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible
      },
    }
  }
};

export default tpbdTheme