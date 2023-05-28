export const getTransactionColor = type => {
  switch (type) {
    case 'invoice':
      return '#C3FBD8';
    case 'payment':
      return '#FADADD';
    case 'withdrawal':
      return '#FFFADD';
    case 'deposit':
      return '#ACE5EE';
    default:
      throw new Error(`Unsupported variant prop value - ${type}`);
  }
};
