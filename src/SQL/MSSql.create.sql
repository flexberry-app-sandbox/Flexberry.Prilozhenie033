



CREATE TABLE [СпрПользов] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Должность] VARCHAR(255)  NULL,

	 [Код] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧФактВыпР] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВрПриб] VARCHAR(255)  NULL,

	 [ВрУб] VARCHAR(255)  NULL,

	 [КдПрост] REAL  NULL,

	 [КлЧасНОб] REAL  NULL,

	 [КолЧасПр] REAL  NULL,

	 [КолЧасРаб] REAL  NULL,

	 [ОбГруз] REAL  NULL,

	 [ОбРаб] VARCHAR(255)  NULL,

	 [СтатЗатр] VARCHAR(255)  NULL,

	 [СпрВидыРаб] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрЕдИзмер] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрКонтрАг] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрНомен] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрТипТрансСр] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрТранспСр] UNIQUEIDENTIFIER  NOT NULL,

	 [ФактВыполРаб] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпрЕдИзмер] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ФактВыполРаб] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Время] VARCHAR(255)  NULL,

	 [Дата] DATETIME  NULL,

	 [Номер] INT  NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрОбъектСтр] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрПользов] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Организация] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Описание] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпрКонтрАг] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ИНН] INT  NULL,

	 [Код] INT  NULL,

	 [КодОКВЭД] INT  NULL,

	 [КодПоОКПО] INT  NULL,

	 [КПП] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [ОГРН] INT  NULL,

	 [Телефон] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпрНомен] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Описание] VARCHAR(255)  NULL,

	 [СпрЕдИзмер] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧПлЗНаД] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВремПриб] DATETIME  NULL,

	 [КолЧас] REAL  NULL,

	 [ОбГруз] REAL  NULL,

	 [ОбРаб] VARCHAR(255)  NULL,

	 [СпрВидыРаб] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрЕдИзмер] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрКонтрАг] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрНомен] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрТипТрансСр] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрТранспСр] UNIQUEIDENTIFIER  NOT NULL,

	 [СтатьиЗатрат] UNIQUEIDENTIFIER  NOT NULL,

	 [ДокПланЗаНаД] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпрТранспСр] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВидПеревоз] VARCHAR(255)  NULL,

	 [ГосНомер] VARCHAR(255)  NULL,

	 [ГрузПодъемВТон] VARCHAR(255)  NULL,

	 [Код] INT  NULL,

	 [ЛицеКартНомер] INT  NULL,

	 [Марка] VARCHAR(255)  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпрОбъектСтр] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ДокПланЗаНаД] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Время] VARCHAR(255)  NULL,

	 [Дата] DATETIME  NULL,

	 [Номер] INT  NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрОбъектСтр] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрПользов] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпрТипТрансСр] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ВместВКубМ] REAL  NULL,

	 [Код] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [Описание] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СпрВидыРаб] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [СпрЕдИзмер] UNIQUEIDENTIFIER  NOT NULL,

	 [СпрТипТрансСр] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СтатьиЗатрат] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Код] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




