
const IsLoading = function(props) {
  const {
    isLoading,
    children,
  } = props;
  
  if (isLoading) return '';
  return children;
}

export default IsLoading;