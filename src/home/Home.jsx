import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { userActions } from '../_store';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from '@mui/material/Button';

export { Home };

function Home() {
    const dispatch = useDispatch();
    const { user: authUser } = useSelector(x => x.auth);
    const { users } = useSelector(x => x.users);

    useEffect(() => {
        dispatch(userActions.getAll());
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
      <> <h4 className="card-header">Profile</h4>
        <Card sx={{ minWidth: 200 }}>
        <CardContent>
       
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 5, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
            textAlign="center"
          >
            <div>
              <TextField
                id="outlined-read-only-input"
                label="COMPANY (DISABLED)"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="username"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-read-only-input"
                label="username ADDRESS"
                type="text"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
            <div>
              <Grid item xs={6} md={8}>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 5, width: "43ch" },
                  }}
                  noValidate
                  autoComplete="off"
                  textAlign="center"
                >
                  <TextField
                    id="outlined-read-only-input"
                    label="FIrst Name"
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="outlined-read-only-input"
                    label="Last NAME"
                    type="text"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Box>
              </Grid>
            </div>
            <div>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 5, width: "95ch" },
                }}
                noValidate
                autoComplete="off"
                textAlign="center"
              >
                <TextField
                  id="outlined-read-only-input"
                  label="ADDRESS"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
            </div>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 5, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
              textAlign="center"
            >
              <div>
                <TextField
                  id="outlined-read-only-input"
                  label="CITY"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="COUNTRY"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                  id="outlined-read-only-input"
                  label="POSTAL CODE"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
            </Box>
            <div>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 10, width: "95ch" },
                }}
                noValidate
                autoComplete="off"
                textAlign="center"
              >
                <TextareaAutosize
                  label="ABOUT ME"
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ width: 850, height: 100 }}
                />
              </Box>
            </div>
          </Box>
         < Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 10, width: "95ch" },
                }}
                noValidate
                autoComplete="off"
                textAlign="right"
              >
              <Button variant="contained">Update Profile</Button>
              </Box>
       
        </CardContent>
      </Card>
      </>
    );
}
