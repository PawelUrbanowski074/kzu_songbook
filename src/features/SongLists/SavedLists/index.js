import { useDispatch, useSelector } from "react-redux";
import { Content, Item, List, SideContainer, StyledLink, TrackBar } from "./styled";


export const SavedLists = () => {
  // const lists = useSelector(state => selectLists(state));  
  const lists = [
    {
      "listTitle": "Próba",
      "songs": [1,2,3,4,5],
      "id": "1"
    },
    {
      "listTitle": "Próba 2",
      "songs": [1,2,3],
      "id": "2"
    },
    {
      "listTitle": "Próba 3",
      "songs": [1],
      "id": "3"
    }
  ];

  return (
    <List>
      {lists.map(list => (
        <Item key={list.id} >
          <TrackBar>
            <Content>
              <StyledLink to={`/listy/${list.id}`}>
                {list.id}. {list.listTitle}
              </StyledLink>
              
            </Content>
            <SideContainer>
                Liczba utwórów: {list.songs.length}
              </SideContainer>
          </TrackBar>
        </Item>
      ))}
    </List>
  );
};