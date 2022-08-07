# whois-lookup [![npm version](https://badge.fury.io/js/whois-lookup.svg)](https://badge.fury.io/js/whois-lookup)
This is a simple wrapper for the unix/linux/macos whois command. Output contain raw JSON data and registration_date, updated_date, expiry_date of domain

## Install
```
npm i whois-lookup
```

## Usage
```
const whois = require('whois-lookup')
```
You can add [all args from whois](https://linux.die.net/man/1/whois) to the args array.
### Examples
```
const whois = require('whois-lookup')
whois.lookup(['google.com'])
  .then((result) => {
    console.log(result)
  })
  .catch((err) => {
    console.log('Error:', err);
  });
```

## Result

The whois of particular domain address returns the object with following properties error, registration_date, updated_date, expiry_date, rawData
```
{
  error: false,
  registration_date: 1997-09-15T07:00:00.000Z,
  updated_date: 2019-09-09T15:39:04.000Z,
  expiry_date: 2028-09-13T07:00:00.000Z,
  rawData: '% IANA WHOIS server\n' +
    '% for more information on IANA, visit http://www.iana.org\n' +
    '% This query returned 1 object\n' +
    '\n' +
    'refer:        whois.verisign-grs.com\n' +
    '\n' +
    'domain:       COM\n' +
    '\n' +
    'organisation: VeriSign Global Registry Services\n' +
    'address:      12061 Bluemont Way\n' +
    'address:      Reston Virginia 20190\n' +
    'address:      United States\n' +
    '\n' +
    'contact:      administrative\n' +
    'name:         Registry Customer Service\n' +
    'organisation: VeriSign Global Registry Services\n' +
    'address:      12061 Bluemont Way\n' +
    'address:      Reston Virginia 20190\n' +
    'address:      United States\n' +
    'phone:        +1 703 925-6999\n' +
    'fax-no:       +1 703 948 3978\n' +
    'e-mail:       info@verisign-grs.com\n' +
    '\n' +
    'contact:      technical\n' +
    'name:         Registry Customer Service\n' +
    'organisation: VeriSign Global Registry Services\n' +
    'address:      12061 Bluemont Way\n' +
    'address:      Reston Virginia 20190\n' +
    'address:      United States\n' +
    'phone:        +1 703 925-6999\n' +
    'fax-no:       +1 703 948 3978\n' +
    'e-mail:       info@verisign-grs.com\n' +
    '\n' +
    'nserver:      A.GTLD-SERVERS.NET 192.5.6.30 2001:503:a83e:0:0:0:2:30\n' +
    'nserver:      B.GTLD-SERVERS.NET 192.33.14.30 2001:503:231d:0:0:0:2:30\n' +
    'nserver:      C.GTLD-SERVERS.NET 192.26.92.30 2001:503:83eb:0:0:0:0:30\n' +
    'nserver:      D.GTLD-SERVERS.NET 192.31.80.30 2001:500:856e:0:0:0:0:30\n' +
    'nserver:      E.GTLD-SERVERS.NET 192.12.94.30 2001:502:1ca1:0:0:0:0:30\n' +
    'nserver:      F.GTLD-SERVERS.NET 192.35.51.30 2001:503:d414:0:0:0:0:30\n' +
    'nserver:      G.GTLD-SERVERS.NET 192.42.93.30 2001:503:eea3:0:0:0:0:30\n' +
    'nserver:      H.GTLD-SERVERS.NET 192.54.112.30 2001:502:8cc:0:0:0:0:30\n' +
    'nserver:      I.GTLD-SERVERS.NET 192.43.172.30 2001:503:39c1:0:0:0:0:30\n' +
    'nserver:      J.GTLD-SERVERS.NET 192.48.79.30 2001:502:7094:0:0:0:0:30\n' +
    'nserver:      K.GTLD-SERVERS.NET 192.52.178.30 2001:503:d2d:0:0:0:0:30\n' +
    'nserver:      L.GTLD-SERVERS.NET 192.41.162.30 2001:500:d937:0:0:0:0:30\n' +
    'nserver:      M.GTLD-SERVERS.NET 192.55.83.30 2001:501:b1f9:0:0:0:0:30\n' +
    'ds-rdata:     30909 8 2 E2D3C916F6DEEAC73294E8268FB5885044A833FC5459588F4A9184CFC41A5766\n' +
    '\n' +
    'whois:        whois.verisign-grs.com\n' +
    '\n' +
    'status:       ACTIVE\n' +
    'remarks:      Registration information: http://www.verisigninc.com\n' +
    '\n' +
    'created:      1985-01-01\n' +
    'changed:      2017-10-05\n' +
    'source:       IANA\n' +
    '\n' +
    '# whois.verisign-grs.com\n' +
    '\n' +
    '   Domain Name: GOOGLE.COM\r\n' +
    '   Registry Domain ID: 2138514_DOMAIN_COM-VRSN\r\n' +
    '   Registrar WHOIS Server: whois.markmonitor.com\r\n' +
    '   Registrar URL: http://www.markmonitor.com\r\n' +
    '   Updated Date: 2019-09-09T15:39:04Z\r\n' +
    '   Creation Date: 1997-09-15T04:00:00Z\r\n' +
    '   Registry Expiry Date: 2028-09-14T04:00:00Z\r\n' +
    '   Registrar: MarkMonitor Inc.\r\n' +
    '   Registrar IANA ID: 292\r\n' +
    '   Registrar Abuse Contact Email: abusecomplaints@markmonitor.com\r\n' +
    '   Registrar Abuse Contact Phone: +1.2086851750\r\n' +
    '   Domain Status: clientDeleteProhibited https://icann.org/epp#clientDeleteProhibited\r\n' +
    '   Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited\r\n' +
    '   Domain Status: clientUpdateProhibited https://icann.org/epp#clientUpdateProhibited\r\n' +
    '   Domain Status: serverDeleteProhibited https://icann.org/epp#serverDeleteProhibited\r\n' +
    '   Domain Status: serverTransferProhibited https://icann.org/epp#serverTransferProhibited\r\n' +
    '   Domain Status: serverUpdateProhibited https://icann.org/epp#serverUpdateProhibited\r\n' +
    '   Name Server: NS1.GOOGLE.COM\r\n' +
    '   Name Server: NS2.GOOGLE.COM\r\n' +
    '   Name Server: NS3.GOOGLE.COM\r\n' +
    '   Name Server: NS4.GOOGLE.COM\r\n' +
    '   DNSSEC: unsigned\r\n' +
    '   URL of the ICANN Whois Inaccuracy Complaint Form: https://www.icann.org/wicf/\r\n' +
    '>>> Last update of whois database: 2022-08-07T10:49:11Z <<<\r\n' +
    '\n' +
    '# whois.markmonitor.com\n' +
    '\n' +
    'Domain Name: google.com\n' +
    'Registry Domain ID: 2138514_DOMAIN_COM-VRSN\n' +
    'Registrar WHOIS Server: whois.markmonitor.com\n' +
    'Registrar URL: http://www.markmonitor.com\n' +
    'Updated Date: 2019-09-09T15:39:04+0000\n' +
    'Creation Date: 1997-09-15T07:00:00+0000\n' +
    'Registrar Registration Expiration Date: 2028-09-13T07:00:00+0000\n' +
    'Registrar: MarkMonitor, Inc.\n' +
    'Registrar IANA ID: 292\n' +
    'Registrar Abuse Contact Email: abusecomplaints@markmonitor.com\n' +
    'Registrar Abuse Contact Phone: +1.2086851750\n' +
    'Domain Status: clientUpdateProhibited (https://www.icann.org/epp#clientUpdateProhibited)\n' +
    'Domain Status: clientTransferProhibited (https://www.icann.org/epp#clientTransferProhibited)\n' +
    'Domain Status: clientDeleteProhibited (https://www.icann.org/epp#clientDeleteProhibited)\n' +
    'Domain Status: serverUpdateProhibited (https://www.icann.org/epp#serverUpdateProhibited)\n' +
    'Domain Status: serverTransferProhibited (https://www.icann.org/epp#serverTransferProhibited)\n' +
    'Domain Status: serverDeleteProhibited (https://www.icann.org/epp#serverDeleteProhibited)\n' +
    'Registrant Organization: Google LLC\n' +
    'Registrant State/Province: CA\n' +
    'Registrant Country: US\n' +
    'Registrant Email: Select Request Email Form at https://domains.markmonitor.com/whois/google.com\n' +
    'Admin Organization: Google LLC\n' +
    'Admin State/Province: CA\n' +
    'Admin Country: US\n' +
    'Admin Email: Select Request Email Form at https://domains.markmonitor.com/whois/google.com\n' +
    'Tech Organization: Google LLC\n' +
    'Tech State/Province: CA\n' +
    'Tech Country: US\n' +
    'Tech Email: Select Request Email Form at https://domains.markmonitor.com/whois/google.com\n' +
    'Name Server: ns4.google.com\n' +
    'Name Server: ns2.google.com\n' +
    'Name Server: ns1.google.com\n' +
    'Name Server: ns3.google.com\n' +
    'DNSSEC: unsigned\n' +
    'URL of the ICANN WHOIS Data Problem Reporting System: http://wdprs.internic.net/\n' +
    '>>> Last update of WHOIS database: 2022-08-07T10:43:29+0000 <<<\n' +
    '\n'
}

```
