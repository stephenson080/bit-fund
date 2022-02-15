import {Card} from 'semantic-ui-react';

export interface CardItemsType {
  header: string;
  description: string;
  meta: string;
}

type Props = {
  items: CardItemsType[];
};

export default function Campaign(props: Props) {
  return <Card.Group style = {{marginRight: '40px'}} items={props.items} />;
}
