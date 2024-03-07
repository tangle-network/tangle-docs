import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  overflow-x: auto;
  margin: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Header = styled.th`
  background-color: #f1f1f1;
  padding: 12px;
  font-weight: bold;
  border: 1px solid #ddd;
  white-space: nowrap;
`;

const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const SubtotalRow = styled(Row)`
  background-color: #e6f2ff !important;
  font-weight: bold;
`;

const TotalRow = styled(Row)`
  background-color: #d9ead3;
  font-weight: bold;
`;

const Cell = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
  white-space: nowrap;
`;

export default function AllocationTable() {
  return (
    <TableContainer>
      <Table>
        <thead>
          <Row>
            <Header>Allocation Category</Header>
            <Header>Entity Name</Header>
            <Header>Allocated Share (%)</Header>
            <Header>Vesting Plan</Header>
            <Header>Cliff (Months)</Header>
            <Header>Vesting Period (Months)</Header>
            <Header>Immediate Liquidity (%)</Header>
            <Header>Initial Liquid Tokens</Header>
            <Header>Cliff-Release Tokens</Header>
            <Header>Monthly Vesting Rate</Header>
            <Header>Total Tokens Allocated</Header>
          </Row>
        </thead>
        <tbody>
          <Row>
            <Cell>Contributors</Cell>
            <Cell>Webb (Developer)</Cell>
            <Cell>28.56%</Cell>
            <Cell>B-Vesting</Cell>
            <Cell>12</Cell>
            <Cell>24</Cell>
            <Cell>5%</Cell>
            <Cell>1,356,250.00</Cell>
            <Cell>12,884,375.00</Cell>
            <Cell>2,147,395.83</Cell>
            <Cell>27,125,000.00</Cell>
          </Row>
          <Row>
            <Cell>Contributors</Cell>
            <Cell>Investors</Cell>
            <Cell>13.64%</Cell>
            <Cell>A-Vesting</Cell>
            <Cell>12</Cell>
            <Cell>24</Cell>
            <Cell>0%</Cell>
            <Cell>0.00</Cell>
            <Cell>6,820,000.00</Cell>
            <Cell>1,136,666.67</Cell>
            <Cell>13,640,000.00</Cell>
          </Row>
          <Row>
            <Cell>Contributors</Cell>
            <Cell>Indiv. Webb Contributors</Cell>
            <Cell>1.44%</Cell>
            <Cell>B-Vesting</Cell>
            <Cell>12</Cell>
            <Cell>48</Cell>
            <Cell>5%</Cell>
            <Cell>71,750.00</Cell>
            <Cell>340,812.50</Cell>
            <Cell>37,868.06</Cell>
            <Cell>1,435,000.00</Cell>
          </Row>
          <SubtotalRow>
            <Cell colSpan={2}>
              <strong>Contributors Subtotal</strong>
            </Cell>
            <Cell>43.64%</Cell>
            <Cell colSpan={4}></Cell>
            <Cell>1,428,000.00</Cell>
            <Cell colSpan={2}></Cell>
            <Cell>42,200,000.00</Cell>
          </SubtotalRow>
          <Row>
            <Cell>Governance-Managed</Cell>
            <Cell>Treasury</Cell>
            <Cell>36.36%</Cell>
            <Cell>n/a</Cell>
            <Cell>n/a</Cell>
            <Cell>n/a</Cell>
            <Cell>100%</Cell>
            <Cell>n/a</Cell>
            <Cell>n/a</Cell>
            <Cell>n/a</Cell>
            <Cell>36,360,000.00</Cell>
          </Row>
          <Row>
            <Cell>Governance-Managed</Cell>
            <Cell>Foundation</Cell>
            <Cell>15.00%</Cell>
            <Cell>n/a</Cell>
            <Cell>n/a</Cell>
            <Cell>n/a</Cell>
            <Cell>100%</Cell>
            <Cell>n/a</Cell>
            <Cell>n/a</Cell>
            <Cell>n/a</Cell>
            <Cell>15,000,000.00</Cell>
          </Row>
          <SubtotalRow>
            <Cell colSpan={2}>
              <strong>Governance-Managed Subtotal</strong>
            </Cell>
            <Cell>51%</Cell>
            <Cell colSpan={7}></Cell>
            <Cell>51,360,000.00</Cell>
          </SubtotalRow>
          <Row>
            <Cell>Airdrops</Cell>
            <Cell>Leaderboard Participants</Cell>
            <Cell>2%</Cell>
            <Cell>C-Vesting</Cell>
            <Cell>1</Cell>
            <Cell>24</Cell>
            <Cell>5%</Cell>
            <Cell>100,000.00</Cell>
            <Cell>79,166.67</Cell>
            <Cell>82,608.70</Cell>
            <Cell>2,000,000.00</Cell>
          </Row>
          <Row>
            <Cell>Airdrops</Cell>
            <Cell>DOT Validators Snapshot</Cell>
            <Cell>1%</Cell>
            <Cell>C-Vesting</Cell>
            <Cell>1</Cell>
            <Cell>24</Cell>
            <Cell>5%</Cell>
            <Cell>50,000.00</Cell>
            <Cell>39,583.33</Cell>
            <Cell>41,304.35</Cell>
            <Cell>1,000,000.00</Cell>
          </Row>
          <Row>
            <Cell>Airdrops</Cell>
            <Cell>EDG Genesis Participants</Cell>
            <Cell>1%</Cell>
            <Cell>C-Vesting</Cell>
            <Cell>1</Cell>
            <Cell>24</Cell>
            <Cell>5%</Cell>
            <Cell>50,000.00</Cell>
            <Cell>39,583.33</Cell>
            <Cell>41,304.35</Cell>
            <Cell>1,000,000.00</Cell>
          </Row>
          <Row>
            <Cell>Airdrops</Cell>
            <Cell>EDG 2023 Snapshot</Cell>
            <Cell>1%</Cell>
            <Cell>C-Vesting</Cell>
            <Cell>1</Cell>
            <Cell>24</Cell>
            <Cell>5%</Cell>
            <Cell>50,000.00</Cell>
            <Cell>39,583.33</Cell>
            <Cell>41,304.35</Cell>
            <Cell>1,000,000.00</Cell>
          </Row>
          <SubtotalRow>
            <Cell colSpan={2}>
              <strong>Airdrops Subtotal</strong>
            </Cell>
            <Cell colSpan={5}></Cell>
            <Cell>250,000.00</Cell>
            <Cell>197,916.67</Cell>
            <Cell colSpan={1}></Cell>
            <Cell>5,000,000.00</Cell>
          </SubtotalRow>
          <TotalRow>
            <Cell colSpan={2}>
              <strong>Total Supply</strong>
            </Cell>
            <Cell>100%</Cell>
            <Cell colSpan={7}></Cell>
            <Cell>100,000,000.00</Cell>
          </TotalRow>
        </tbody>
      </Table>
    </TableContainer>
  );
}
