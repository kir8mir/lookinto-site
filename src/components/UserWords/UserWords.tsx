import * as React from "react";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function not(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a: readonly number[], b: readonly number[]) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function UserWords(userWords: any) {
  const [checked, setChecked] = React.useState<any[]>([]);

  const { newUserWords, familiarUserWords, forgottenUserWords } = userWords;

  const [left, setLeft] = React.useState<any[]>(newUserWords);
  const [center, setCenter] = React.useState<any[]>(familiarUserWords);
  const [right, setRight] = React.useState<any[]>(forgottenUserWords);

  const leftChecked = intersection(checked, left);
  const centerChecked = intersection(checked, center);
  const rightChecked = intersection(checked, right);

  console.log("userWords", userWords);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleCheckedLeftToCenter = () => {
    setCenter(center.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedCenterToRight = () => {
    setRight(right.concat(centerChecked));
    setCenter(not(center, centerChecked));
    setChecked(not(checked, centerChecked));
  };

  const handleCheckedCenterToLeft = () => {
    setLeft(left.concat(centerChecked));
    setCenter(not(center, centerChecked));
    setChecked(not(checked, centerChecked));
  };

  const handleCheckedRightToCenter = () => {
    setCenter(center.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (items: readonly number[]) => (
    <Paper sx={{ width: 200, height: 230, overflow: "auto" }}>
      <List dense component="div" role="list">
        {items.map((value: any) => {
          const labelId = `transfer-list-item-${value.id}-label`;
          return (
            <>
              <ListItem
                key={value.id}
                role="listitem"
                button
                onClick={handleToggle(value)}
              >
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      "aria-labelledby": value.id,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`${value.title} - ${value.translations[0].title}`}
                />
              </ListItem>
            </>
          );
        })}
      </List>
    </Paper>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Box>
        <Typography variant="h6" gutterBottom component="h4">New</Typography>
        <Grid item>{customList(left)}</Grid>
      </Box>

      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeftToCenter}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedCenterToLeft}
            disabled={centerChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h6" gutterBottom component="h4">Familiar</Typography>
      <Grid item>{customList(center)}</Grid>
      </Box>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedCenterToRight}
            disabled={centerChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRightToCenter}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h6" gutterBottom component="h4">Forgotten</Typography>
      <Grid item>{customList(right)}</Grid>
      </Box>
    </Grid>
  );
}
