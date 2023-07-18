import styled from "styled-components";
import FormActivity from "../FormActivity/FormActivity";

const PageActivitiesBox = styled.div`
  background-color: var(--light-blue);
  height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
`;

export default function PageActivities() {
  return (
    <PageActivitiesBox>
      <FormActivity />
    </PageActivitiesBox>
  );
}
