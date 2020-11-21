import styled from "styled-components";

export const AppScreen = styled.div`
  text-align: center;
`;

export const Title = styled.span`
  font-size: 40px;
`;

export const AvailableTrips = styled.div`
  color: #928888;
  font-size: 18px;
  margin: 60px 0;
`;

export const List = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  
  & > div {
    margin-bottom: 30px;
  }
`;

export const StyledTrip = styled.div`
  border: 1px solid #dbd0d0;
  border-radius: 4px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 10px;
  width: 550px;
`;

export const TripProperties = styled.div`
  display: flex;
`;

export const WayPoint = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const Attribute = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const ColoredAttribute = styled(Attribute)`
  color: #395abe;
  margin-left: ${props => props.isPrice ? 'auto' : '10px'};
`