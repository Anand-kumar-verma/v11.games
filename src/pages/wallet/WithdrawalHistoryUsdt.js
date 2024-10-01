import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import * as React from "react";
import { useQuery } from "react-query";
import CustomCircularProgress from "../../Shared/CustomCircularProgress";
import { bgdarkgray, bggrad, zubgback, zubgtext } from "../../Shared/color";
import deposit from "../../assets/check.png";
import Layout from "../../component/Layout/Layout";
import { withdrawlHistoryUSdtFunction } from "../../services/apicalling";

function WithdrawalHistoryUSdt() {

  const { isLoading, data } = useQuery(
    ["withdrwal_history"],
    () => withdrawlHistoryUSdtFunction(),
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false
    }
  );

  const res = data?.data?.data || []

  return (
    <Layout>
      <Container
        sx={{
          background: zubgback,
          width: "100%",
          height: "100vh",
          overflow: "auto",
          mb: 5,
        }}
        className="no-scrollbar"
      >
        <CustomCircularProgress isLoading={isLoading} />
        <Box>
          <Box
            sx={{
              padding: "10px",
              // background: zubgwhite,
              // boxShadow: zubgshadow,
              borderRadius: "10px",
              mb: 5,
              mt: 9,
            }}
          >
            <Stack direction="row" sx={{ alignItems: "center", mb: "20px" }}>
              <Box component="img" src={deposit} width={30}></Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ fontSize: "15px ", color: 'white', ml: "10px" }}
              >
                Withdrawal USDT history
              </Typography>
            </Stack>
            {res?.map((i) => {
              return (
                <Box
                  sx={{
                    mb: 2,
                    padding: "15px",
                    borderRadius: "10px",
                    background: bggrad,
                  }}
                >
                  <Stack
                    direction="row"
                    sx={{
                      paddingBottom: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      borderBottom: "1px solid white",
                    }}
                  >
                    <Box>
                      <Button
                        sx={{
                          background: bgdarkgray,
                          color: "white",
                          textTransform: "capitalize",
                        }}
                      >
                        Withdrawal
                      </Button></Box>

                    <Box>
                      <Button
                        sx={{ color: "green", textTransform: "capitalize" }}
                        className={`${i?.tr15_status === "Approve"
                          ? "!text-green-500 !text-[15px]"
                          : "!text-red-500 !text-[15px]"
                          }`}
                      >
                        {i?.tr15_status}
                      </Button>
                      <IconButton>
                        <ArrowForwardIcon sx={{ color: zubgtext }} />
                      </IconButton>
                    </Box>
                  </Stack>

                  <Stack
                    direction="row"
                    sx={{
                      mt: "10px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      Balance
                    </Typography>
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      {/* ₹  */}
                      {i?.dollar_amount || i?.tr15_amt}
                    </Typography>
                  </Stack>
                
                  <Stack
                    direction="row"
                    sx={{
                      my: "5px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      Status
                    </Typography>
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      {i?.tr15_status}{" "}
                    </Typography>
                  </Stack>
                 
              
                  <Stack

                    direction="row"
                    sx={{
                      mb: "5px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      USDT Type
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        mb: "5px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        "&>p": { color: zubgtext },
                      }}
                    >
                      <Typography variant="body1" color="initial" className="!text-[15px] " >
                        <p>   {i?.usdt_type}</p>
                       
                      </Typography>
                    </Stack>
                    
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      mb: "5px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                    Transaction Hash
                    </Typography>
                    <Stack
                      direction="row"
                      sx={{
                        mb: "5px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        "&>p": { color: zubgtext },
                      }}
                    >
                      <Typography variant="body1" color="initial" className="!text-[15px]">
                        {i?.tr15_trans}
                      </Typography>

                      {/* <IconButton>
                        <ContentCopyIcon sx={{ color: zubgtext }} />
                      </IconButton> */}
                    </Stack>
                  </Stack>
                  <Stack
                    direction="row"
                    sx={{
                      mb: "5px",
                      alignItems: "center",
                      justifyContent: "space-between",
                      "&>p": { color: zubgtext },
                    }}
                  >
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      Date/Time
                    </Typography>
                    <Typography variant="body1" color="initial" className="!text-[15px]">
                      {moment(i?.tr15_date)?.format("DD-MM-YYYY")}{" "}
                      {moment(i?.tr15_date)?.format("HH:mm:ss")}
                    </Typography>
                  </Stack>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}

export default WithdrawalHistoryUSdt;

