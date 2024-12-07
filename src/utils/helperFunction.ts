export const getDerivedPath = (
  selectedBlockChain: string,
  accountIndex: number
) => {
  let derivationPath = "";
  if (selectedBlockChain === "solana") {
    // derivationPath = `m/44'/501'/0/${accountIndex}`;
    derivationPath = `m/44'/501'/${accountIndex}'/0'`;
  } else {
    // derivationPath = `m/44'/60'/0/${accountIndex}`;
    derivationPath = `m/44'/60'/${accountIndex}'/0`;
  }
  return derivationPath;
};
