import {Heading} from '@gluestack-ui/themed';
import React from 'react';

type Props = {
  title: string;
};

const AppTitle = ({title}: Props) => {
  return <Heading fontSize="$2xl">{title}</Heading>;
};
export default AppTitle;
