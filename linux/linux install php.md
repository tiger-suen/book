### linux安装php8
```
./configure --prefix=/usr/local/php8 --enable-fpm --enable-mysqlnd --enable-calendar --enable-exif --enable-pcntl --enable-shmop --enable-xml --enable-sysvmsg --enable-sysvsem --enable-sysvshm --enable-wddx --enable-bcmath --enable-inline-optimization --enable-mbstring --enable-intl --enable-ftp --enable-sockets --enable-zip --enable-soap --enable-tokenizer --enable-session --enable-ftp --enable-pdo --enable-tokenizer --enable-mysqlnd-compression-support --with-fpm-user=nginx --with-fpm-group=nginx --with-pdo-mysql --with-mysqli --with-iconv=/usr/local/libiconv --with-freetype-dir --with-jpeg-dir --with-png-dir --with-zlib --with-libxml-dir --with-gd --with-curl=/usr/local/curl --with-openssl --with-mhash --with-xmlrpc --with-gettext --with-pear --with-gmp --with-libmbfl --with-bz2 --with-ldap --with-readline --with-snmp --with-xsl --with-kerberos --with-imap --with-imap-ssl
```

PHP编译IMAP模块时提示configure: error: utf8_mime2text() has new signature, but U8T_CANONICAL is missing，安装libc-client-devel 即可
>yum install libc-client-devel

Cannot find imap library (libc-client.a).
>  yum install libc-client-devel.x86_64
> ln -s /usr/lib64/libc-client.so /usr/lib/libc-client.so

configure: error: Cannot find ldap.h
> yum install openldap openldap-devel  -y

configure: error: Cannot find ldap libraries in /usr/lib
> cp -frp /usr/lib64/libldap* /usr/lib/

configure: error: Please reinstall readline - I cannot find readline.h
> yum -y install readline-devel

configure: error: Could not find net-snmp-config binary. Please check your net-snmp installation.
> yum -y install net-snmp-devel

configure: error: xslt-config not found. Please reinstall the libxslt >= 1.1.0 distribution
> yum -y install libxslt-devel

configure: error: Please reinstall readline - I cannot find readline.h
> yum -y install readline-devel

configure: error: Please reinstall readline - I cannot find readline.h
> yum -y install readline-devel

configure: error: Cannot find pspell
> yum -y install aspell-devel

checking for unixODBC support... configure: error: ODBC header file '/usr/include/sqlext.h' not found!
> yum -y install unixODBC-devel

configure: error: Unable to detect ICU prefix or /usr/bin/icu-config failed. Please verify ICU install prefix and make sure icu-config works.
> yum -y install libicu-devel

configure: error: utf8mime2text() has new signature, but U8TCANONICAL is missing. This should not happen. Check config.log for additional information.
> yum -y install libc-client-devel

configure: error: freetype.h not found.
> yum -y install freetype-devel

configure: error: xpm.h not found.
> yum -y install libXpm-devel

configure: error: png.h not found.
> yum -y install libpng-devel

configure: error: vpx_codec.h not found.
> yum -y install libvpx-devel

configure: error: Cannot find enchant
> yum -y install enchant-devel

configure: error: Please reinstall the libcurl distribution - easy.h should be in /include/curl/
> yum -y install libcurl-devel

configure: error: mcrypt.h not found. Please reinstall libmcrypt.
> wget ftp://mcrypt.hellug.gr/pub/crypto/mcrypt/libmcrypt/libmcrypt-2.5.7.tar.gz
> tar zxf libmcrypt-2.5.7.tar.gz
> cd libmcrypt-2.5.7
> ./configure
> make && make install

Cannot find imap
> ln -s /usr/lib64/libc-client.so /usr/lib/libc-client.so

configure: error: utf8_mime2text() has new signature, but U8T_CANONICAL is missing.
> yum -y install libc-client-devel

Cannot find ldap.h
> yum -y install openldap
> yum -y install openldap-devel

configure: error: Cannot find ldap libraries in /usr/lib
> cp -frp /usr/lib64/libldap* /usr/lib/

configure: error: Cannot find libpq-fe.h. Please specify correct PostgreSQL installation path
> yum -y install postgresql-devel

configure: error: Please reinstall the lib curl distribution
> yum -y install curl-devel

configure: error: Could not find net-snmp-config binary. Please check your net-snmp installation.
> yum -y install net-snmp-devel

configure: error: xslt-config not found. Please reinstall the libxslt >= 1.1.0 distribution
> yum -y install libxslt-devel

checking for BZip2 support… yes checking for BZip2 in default path… not found configure: error: Please reinstall the BZip2 distribution
> yum -y install bzip2-devel

checking for cURL support… yes checking if we should use cURL for url streams… no checking for cURL in default path… not found configure: error: Please reinstall the libcurl distribution – easy.h should be in/include/curl/
> yum -y install curl-devel

checking for curl_multi_strerror in -lcurl… yes checking for QDBM support… no checking for GDBM support… no checking for NDBM support… no configure: error: DBA: Could not find necessary header file(s).
> yum -y install db4-devel

checking for fabsf… yes checking for floorf… yes checking for jpeg_read_header in -ljpeg… yes configure: error: png.h not found.
> yum -y install libpng-devel

checking for fabsf… yes checking for floorf… yes checking for jpeg_read_header in -ljpeg… yes configure: error: png.h not found.
> yum -y install libpng-devel

checking for png_write_image in -lpng… yes If configure fails try –with-xpm-dir=, configure: error: freetype.h not found.
Reconfigure your PHP with the following option. --with-xpm-dir=/usr
checking for png_write_image in -lpng… yes configure: error: libXpm.(a|so) not found.
> yum -y install libXpm-devel

checking for bind_textdomain_codeset in -lc… yes checking for GNU MP support… yes configure: error: Unable to locate gmp.h
> yum -y install gmp-devel

checking for utf8_mime2text signature… new checking for U8T_DECOMPOSE… configure: error: utf8_mime2text() has new signature, but U8T_CANONICAL is missing. This should not happen. Check config.log for additional information.
> yum -y install libc-client-devel

checking for LDAP support… yes, shared checking for LDAP Cyrus SASL support… yes configure: error: Cannot find ldap.h
> yum -y install openldap-devel

checking for mysql_set_character_set in -lmysqlclient… yes checking for mysql_stmt_next_result in -lmysqlclient… no checking for Oracle Database OCI8 support… no checking for unixODBC support… configure: error: ODBC header file ‘/usr/include/sqlext.h' not found!
> yum -y install unixODBC-devel

checking for PostgreSQL support for PDO… yes, shared checking for pg_config… not found configure: error: Cannot find libpq-fe.h. Please specify correct PostgreSQL installation path
> yum -y install postgresql-devel

checking for sqlite 3 support for PDO… yes, shared checking for PDO includes… (cached) /usr/local/src/php-5.3.7/ext checking for sqlite3 files in default path… not found configure: error: Please reinstall the sqlite3 distribution
> yum -y install sqlite-devel

checking for utsname.domainname… yes checking for PSPELL support… yes configure: error: Cannot find pspell
> yum -y install aspell-devel

checking for kstat_read in -lkstat… no checking for snmp_parse_oid in -lsnmp… no checking for init_snmp in -lsnmp… no configure: error: SNMP sanity check failed. Please check config.log for more information.
> yum -y install net-snmp-devel

checking whether to enable XMLWriter support… yes, shared checking for xml2-config path… (cached) /usr/bin/xml2-config checking whether libxml build works… (cached) yes checking for XSL support… yes, shared configure: error: xslt-config not found. Please reinstall the libxslt >= 1.1.0 distribution
> yum -y install libxslt-devel

configure: error: xml2-config not found. Please check your libxml2 installation.
> yum -y install libxml2-devel

checking for PCRE headers location… configure: error: Could not find pcre.h in /usr
> yum -y install pcre-devel

configure: error: Cannot find MySQL header files under yes. Note that the MySQL client library is not bundled anymore!
> yum -y install mysql-devel

checking for unixODBC support… configure: error: ODBC header file ‘/usr/include/sqlext.h' not found!
> yum -y install unixODBC-devel

checking for pg_config… not found configure: error: Cannot find libpq-fe.h. Please specify correct PostgreSQL installation path
> yum -y install postgresql-devel

configure: error: Cannot find pspell
> yum -y install pspell-devel

configure: error: xslt-config not found. Please reinstall the libxslt >= 1.1.0 distribution
> yum -y install libxslt-devel 

configure: error: No curses/termcap library found
网上有的说法是：–with-named-curses-libs=/usr/lib/libncursesw.so.5
其实是不对的，虽然能解决configure的错误，但是make的时候会提示错误，正确的做法应该是
> yum -y install ncurses-devel

configure: error: Cannot find OpenSSL's
> yum -y install openssl-devel

configure: error: libjpeg.(a|so) not found
> yum -y install gd
> yum -y install gd-devel
 
configure: error: cannot find output from lex; giving up
> yum -y install flex

configure: error: mod_deflate has been requested but can not be built due to prerequisite failures
> yum -y install zlib-devel openssl-devel
 
configure: error: libxpm.(a|so) not found.
> yum -y install libxpm-dev
 
configure: error: …No recognized SSL/TLS toolkit detected
> yum -y install libssl-dev

Configure: error: Please reinstall the BZip2 distribution
> yum install bzip2 bzip2-devel
 
Configure: error: Unable to locate gmp.h
> yum install gmp-devel
 
Configure: error: Please reinstall the ncurses distribution
> yum install ncurses ncurses-devel

Configure: error: snmp.h not found. Check your SNMP installation.
> yum install net-snmp net-snmp-devel

开启LDAP服务还需要
> yum -y install openldap-devel openldap-servers openldap-clients

configure: error: cannot find output from lex; giving up
> yum -y install flex

configure: error: mod_deflate has been requested but can not be built due to prerequisite failures
> yum -y install zlib-devel openssl-devel
