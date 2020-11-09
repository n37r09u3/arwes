const styles = theme => ({
  '@global': {
    '*, *:before, *:after': {
      boxSizing: 'border-box'
    },
    'html, body': {
      margin: 0,
      padding: 0,
      backgroundColor: theme.color.background
    }
  },

  root: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column'
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    width: '100%',
    height: 40,
    borderBottom: `1px solid ${theme.color.border}`,
    backgroundColor: theme.color.section,
    fontFamily: theme.typography.main,
    color: theme.color.text,
    userSelect: 'none',

    '& a': {
      textDecoration: 'none',
      color: 'inherit',
      outline: 'none',

      '&hover, &:focus': {
        outline: 'none'
      }
    }
  },
  headerHeading: {
    display: 'flex',
    flexDirection: 'row'
  },
  headerTitle: {
    display: 'inline-block',
    margin: [0, 12],
    lineHeight: '40px',
    fontSize: 20,
    fontWeight: 'bold'
  },

  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row'
  },

  controls: {
    borderRight: `1px solid ${theme.color.border}`,
    padding: 10,
    width: 200,
    backgroundColor: theme.color.section
  },

  content: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'row'
  },

  select: {
    display: 'block',
    border: 'none',
    margin: [0, 0, 10],
    padding: 0,
    width: '100%',
    height: 26,
    lineHeight: '26px',
    fontSize: 14,
    cursor: 'pointer',
    backgroundColor: 'transparent',
    fontFamily: '"Titillium Web", sans-serif',
    color: theme.color.text,
    outline: 'none',
    boxShadow: 'none',

    '& option, & optgroup': {
      backgroundColor: theme.color.section,
      color: theme.color.text
    }
  }
});

export { styles };
