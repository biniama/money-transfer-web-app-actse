import React from "react"
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Box,
    CircularProgress,
} from "@material-ui/core"
import useAxios from "axios-hooks";
import {CheckBox} from "@material-ui/icons";
import {convertPinToStars} from '../helpers/helpers';

const ListAccounts = () => {

    // GET request is the default.
    const [{data, error, loading}] = useAxios("https://money-transfer-api-actse.herokuapp.com/api/account/list")
    //const [{data, error, loading}] = useAxios("http://localhost:8080/api/account/list")

    // the same as the above
    // useAxios({
    //     url: "https://money-transfer-api-actse.herokuapp.com/api/account/list",
    //     method: 'GET'
    // })

    if (loading) {     // if (loading === true) {
        return (
            <Box sx={{display: 'flex'}}>
                <CircularProgress/>
            </Box>
        );
    }

    if (error) return <p>The following error happened: {error.message}</p>

    return (
        <>
            <h1>List of Accounts</h1>

            <form>
                <input type="text"
                   name="search"
                   placeholder="Search for account"
                   />
                <button name="Search" onClick={() => alert('searching ...')}>Search</button>
            </form>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Phone number</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Pin</TableCell>
                            <TableCell>Balance</TableCell>
                            <TableCell>Is Verified?</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {data.map((row) => {
                            return (
                                <TableRow>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.firstName} {row.middleName} {row.lastName}</TableCell>
                                    <TableCell>{row.phoneNumber}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{convertPinToStars(row.pin)}</TableCell>
                                    <TableCell>{row.balance}</TableCell>
                                    <TableCell><CheckBox checked={row.isVerified} /> {row.isVerified.toString()}</TableCell>
                                </TableRow>
                            )
                        })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default ListAccounts;
