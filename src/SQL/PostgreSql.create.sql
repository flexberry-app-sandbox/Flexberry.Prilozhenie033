




CREATE TABLE СпрПользов (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Код INT NULL,
 Должность VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧФактВыпР (
 primaryKey UUID NOT NULL,
 КлЧасНОб REAL NULL,
 ВрПриб VARCHAR(255) NULL,
 ОбГруз REAL NULL,
 КолЧасПр REAL NULL,
 ВрУб VARCHAR(255) NULL,
 КолЧасРаб REAL NULL,
 ОбРаб VARCHAR(255) NULL,
 КдПрост REAL NULL,
 СтатЗатр VARCHAR(255) NULL,
 СпрТипТрансСр UUID NOT NULL,
 СпрНомен UUID NOT NULL,
 СпрКонтрАг UUID NOT NULL,
 СпрВидыРаб UUID NOT NULL,
 СпрТранспСр UUID NOT NULL,
 СпрЕдИзмер UUID NOT NULL,
 ФактВыполРаб UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрЕдИзмер (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ФактВыполРаб (
 primaryKey UUID NOT NULL,
 Время VARCHAR(255) NULL,
 Дата TIMESTAMP(3) NULL,
 Номер INT NULL,
 Организация UUID NOT NULL,
 СпрПользов UUID NOT NULL,
 СпрОбъектСтр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организация (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 Описание VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрКонтрАг (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 КПП INT NULL,
 Телефон INT NULL,
 ИНН INT NULL,
 ОГРН INT NULL,
 КодОКВЭД INT NULL,
 КодПоОКПО INT NULL,
 Код INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрНомен (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 Описание VARCHAR(255) NULL,
 СпрЕдИзмер UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧПлЗНаД (
 primaryKey UUID NOT NULL,
 ОбГруз REAL NULL,
 ОбРаб VARCHAR(255) NULL,
 КолЧас REAL NULL,
 ВремПриб TIMESTAMP(3) NULL,
 СтатьиЗатрат UUID NOT NULL,
 СпрТипТрансСр UUID NOT NULL,
 СпрТранспСр UUID NOT NULL,
 СпрЕдИзмер UUID NOT NULL,
 СпрНомен UUID NOT NULL,
 СпрВидыРаб UUID NOT NULL,
 СпрКонтрАг UUID NOT NULL,
 ДокПланЗаНаД UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрТранспСр (
 primaryKey UUID NOT NULL,
 ГрузПодъемВТон VARCHAR(255) NULL,
 ГосНомер VARCHAR(255) NULL,
 Код INT NULL,
 ЛицеКартНомер INT NULL,
 ВидПеревоз VARCHAR(255) NULL,
 Марка VARCHAR(255) NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрОбъектСтр (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ДокПланЗаНаД (
 primaryKey UUID NOT NULL,
 Дата TIMESTAMP(3) NULL,
 Номер INT NULL,
 Время VARCHAR(255) NULL,
 Организация UUID NOT NULL,
 СпрПользов UUID NOT NULL,
 СпрОбъектСтр UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрТипТрансСр (
 primaryKey UUID NOT NULL,
 Описание VARCHAR(255) NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 ВместВКубМ REAL NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СпрВидыРаб (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 СпрТипТрансСр UUID NOT NULL,
 СпрЕдИзмер UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СтатьиЗатрат (
 primaryKey UUID NOT NULL,
 Код INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ТЧФактВыпР ADD CONSTRAINT FKa94752ca7352240e6dd220da72486eef451e6c78 FOREIGN KEY (СпрТипТрансСр) REFERENCES СпрТипТрансСр; 
CREATE INDEX Indexa94752ca7352240e6dd220da72486eef451e6c78 on ТЧФактВыпР (СпрТипТрансСр); 

 ALTER TABLE ТЧФактВыпР ADD CONSTRAINT FK21ddde601a38b71cb1dd6e8b07dd823edd632b90 FOREIGN KEY (СпрНомен) REFERENCES СпрНомен; 
CREATE INDEX Index21ddde601a38b71cb1dd6e8b07dd823edd632b90 on ТЧФактВыпР (СпрНомен); 

 ALTER TABLE ТЧФактВыпР ADD CONSTRAINT FKdd617b8ca0ea6695b82a76c9383d70de025b28b5 FOREIGN KEY (СпрКонтрАг) REFERENCES СпрКонтрАг; 
CREATE INDEX Indexdd617b8ca0ea6695b82a76c9383d70de025b28b5 on ТЧФактВыпР (СпрКонтрАг); 

 ALTER TABLE ТЧФактВыпР ADD CONSTRAINT FK054b15d9d239a45e342dbd0f6d0adb82de48efad FOREIGN KEY (СпрВидыРаб) REFERENCES СпрВидыРаб; 
CREATE INDEX Index054b15d9d239a45e342dbd0f6d0adb82de48efad on ТЧФактВыпР (СпрВидыРаб); 

 ALTER TABLE ТЧФактВыпР ADD CONSTRAINT FK1baf6daf2cf71b9c15b675ae70737cd8ee4b826b FOREIGN KEY (СпрТранспСр) REFERENCES СпрТранспСр; 
CREATE INDEX Index1baf6daf2cf71b9c15b675ae70737cd8ee4b826b on ТЧФактВыпР (СпрТранспСр); 

 ALTER TABLE ТЧФактВыпР ADD CONSTRAINT FK6275d261ab173ca2d27b64cec0e1e0906fcd832f FOREIGN KEY (СпрЕдИзмер) REFERENCES СпрЕдИзмер; 
CREATE INDEX Index6275d261ab173ca2d27b64cec0e1e0906fcd832f on ТЧФактВыпР (СпрЕдИзмер); 

 ALTER TABLE ТЧФактВыпР ADD CONSTRAINT FK410aa85b9390a2f524bfd6f66ce93219449b19ff FOREIGN KEY (ФактВыполРаб) REFERENCES ФактВыполРаб; 
CREATE INDEX Index410aa85b9390a2f524bfd6f66ce93219449b19ff on ТЧФактВыпР (ФактВыполРаб); 

 ALTER TABLE ФактВыполРаб ADD CONSTRAINT FK5bd7886af849859b0a9e6269bc7a1ee9472d5ac4 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index5bd7886af849859b0a9e6269bc7a1ee9472d5ac4 on ФактВыполРаб (Организация); 

 ALTER TABLE ФактВыполРаб ADD CONSTRAINT FK12f57b966e1b354c1cdd7e8e266a16ab4d8c39e6 FOREIGN KEY (СпрПользов) REFERENCES СпрПользов; 
CREATE INDEX Index12f57b966e1b354c1cdd7e8e266a16ab4d8c39e6 on ФактВыполРаб (СпрПользов); 

 ALTER TABLE ФактВыполРаб ADD CONSTRAINT FK1525f936f2d5cde4b9d2f8856f713afc7497267a FOREIGN KEY (СпрОбъектСтр) REFERENCES СпрОбъектСтр; 
CREATE INDEX Index1525f936f2d5cde4b9d2f8856f713afc7497267a on ФактВыполРаб (СпрОбъектСтр); 

 ALTER TABLE СпрНомен ADD CONSTRAINT FK840c81fedf20e0a82183dd6fd7f6953d4bf35c43 FOREIGN KEY (СпрЕдИзмер) REFERENCES СпрЕдИзмер; 
CREATE INDEX Index840c81fedf20e0a82183dd6fd7f6953d4bf35c43 on СпрНомен (СпрЕдИзмер); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK85b01c861bb17eac42114799d268cb05a6b49618 FOREIGN KEY (СтатьиЗатрат) REFERENCES СтатьиЗатрат; 
CREATE INDEX Index85b01c861bb17eac42114799d268cb05a6b49618 on ТЧПлЗНаД (СтатьиЗатрат); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK7ae6acdd0339c7f804a060b9fe67c2e3b4debd8f FOREIGN KEY (СпрТипТрансСр) REFERENCES СпрТипТрансСр; 
CREATE INDEX Index7ae6acdd0339c7f804a060b9fe67c2e3b4debd8f on ТЧПлЗНаД (СпрТипТрансСр); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK1b0af8dde00e9e6666b6dd46db26821a6e4bac81 FOREIGN KEY (СпрТранспСр) REFERENCES СпрТранспСр; 
CREATE INDEX Index1b0af8dde00e9e6666b6dd46db26821a6e4bac81 on ТЧПлЗНаД (СпрТранспСр); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK8fa3f7ff4218de74f2a401ee088cf71386be5937 FOREIGN KEY (СпрЕдИзмер) REFERENCES СпрЕдИзмер; 
CREATE INDEX Index8fa3f7ff4218de74f2a401ee088cf71386be5937 on ТЧПлЗНаД (СпрЕдИзмер); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK6923d9791df1697b1a5e64cb30e0b07da2c68fdf FOREIGN KEY (СпрНомен) REFERENCES СпрНомен; 
CREATE INDEX Index6923d9791df1697b1a5e64cb30e0b07da2c68fdf on ТЧПлЗНаД (СпрНомен); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FKac908761c6de9cbe037d803cfb4b1e1fee681a00 FOREIGN KEY (СпрВидыРаб) REFERENCES СпрВидыРаб; 
CREATE INDEX Indexac908761c6de9cbe037d803cfb4b1e1fee681a00 on ТЧПлЗНаД (СпрВидыРаб); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FKc68eeee92fec27be705024a03c2f90e0995b68a2 FOREIGN KEY (СпрКонтрАг) REFERENCES СпрКонтрАг; 
CREATE INDEX Indexc68eeee92fec27be705024a03c2f90e0995b68a2 on ТЧПлЗНаД (СпрКонтрАг); 

 ALTER TABLE ТЧПлЗНаД ADD CONSTRAINT FK03d677498857c017bb3c050822879fa2032345bb FOREIGN KEY (ДокПланЗаНаД) REFERENCES ДокПланЗаНаД; 
CREATE INDEX Index03d677498857c017bb3c050822879fa2032345bb on ТЧПлЗНаД (ДокПланЗаНаД); 

 ALTER TABLE ДокПланЗаНаД ADD CONSTRAINT FK3cb2eeb6640ef24550d2a841df946c875058c8c6 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index3cb2eeb6640ef24550d2a841df946c875058c8c6 on ДокПланЗаНаД (Организация); 

 ALTER TABLE ДокПланЗаНаД ADD CONSTRAINT FK81fbb905ae7456eaeeaa1838ff132654ebc92ff2 FOREIGN KEY (СпрПользов) REFERENCES СпрПользов; 
CREATE INDEX Index81fbb905ae7456eaeeaa1838ff132654ebc92ff2 on ДокПланЗаНаД (СпрПользов); 

 ALTER TABLE ДокПланЗаНаД ADD CONSTRAINT FKffa0aecf8e314e28f0eadc399661f74c23f443d7 FOREIGN KEY (СпрОбъектСтр) REFERENCES СпрОбъектСтр; 
CREATE INDEX Indexffa0aecf8e314e28f0eadc399661f74c23f443d7 on ДокПланЗаНаД (СпрОбъектСтр); 

 ALTER TABLE СпрВидыРаб ADD CONSTRAINT FKa7034f7bceece13908821312b7a842afbbddb0e3 FOREIGN KEY (СпрТипТрансСр) REFERENCES СпрТипТрансСр; 
CREATE INDEX Indexa7034f7bceece13908821312b7a842afbbddb0e3 on СпрВидыРаб (СпрТипТрансСр); 

 ALTER TABLE СпрВидыРаб ADD CONSTRAINT FK105cacd2a93f6230c3c135143070c3ef1c4dd0c1 FOREIGN KEY (СпрЕдИзмер) REFERENCES СпрЕдИзмер; 
CREATE INDEX Index105cacd2a93f6230c3c135143070c3ef1c4dd0c1 on СпрВидыРаб (СпрЕдИзмер); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

