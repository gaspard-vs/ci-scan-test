// Fixture: the certificate check is off. CI scan must block.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
