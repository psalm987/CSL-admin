import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.default,
  },
}));

const AntTabs = withStyles((theme) => ({
  root: {
    borderBottom: "1px solid #e8e8e8",
  },
  indicator: {
    backgroundColor: theme.palette.action.selected,
  },
}))(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: theme.palette.action.hover,
      opacity: 1,
    },
    "&$selected": {
      color: theme.palette.action.selected,
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&:focus": {
      color: theme.palette.action.focus,
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

const TabTheme = ({ aria, tabs, onChange }) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    onChange(value);
  }, [value, onChange]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label={aria}>
          {tabs.map((tab, index) => (
            <AntTab label={tab} key={index} />
          ))}
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
};

export default TabTheme;
