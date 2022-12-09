import { P } from 'globalStyles/style';
import React from 'react';
import styled from 'styled-components';



const Card = styled.div`
    width: 82%;
    // height: 130px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    padding: 1rem;
    margin-top: 1rem;
`

const Table = styled.table`
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    
    th {
        text-align: left;
        color: #1E1E1E;
        border-bottom: .5px solid #D9D9D9;
        padding: 6px;
    }
    td {
        text-align: left;

        color: #5B5B5B;
        padding: 14px 8px 0px;

    }
`

const CertificateInfo = () => {
    return (
        <div>

       <P fw='700' fs='24px'>Certificate Information :</P>
        <Card>
            <div style={{ overflowX: 'auto' }}>
                <Table>
                    <tr>
                        <th>No</th>
                        <th></th>

                        <th>OWSAP Requirement</th>
                        <th>Passed</th>
                        <th>Failed</th>
                    </tr>
                    <tr>
                        <td>v2</td>
                        <td></td>
                        <td>Data Storage Capacity Security</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>v2</td>
                        <td></td>
                        <td>Data Storage Capacity Security</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>v2</td>
                        <td></td>
                        <td>Data Storage Capacity Security</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>v2</td>
                        <td></td>
                        <td>Data Storage Capacity Security</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>v2</td>
                        <td></td>
                        <td>Data Storage Capacity Security</td>
                        <td>5</td>
                        <td>5</td>
                    </tr>

                </Table>
            </div>
        </Card>
        </div>
    );
}



export default CertificateInfo;