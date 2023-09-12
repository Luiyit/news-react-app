import PropTypes from 'prop-types';
import Text from '../styled/texts';

const Error = ({ message }: { message: string }) => {
  if (!message) return null;

  return (
    <Text color="#cd201f" fontSize="14px" paddingT="4px">
      {message}
    </Text>
  );
};

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
