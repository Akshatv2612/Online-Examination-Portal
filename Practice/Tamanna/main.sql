CREATE TABLE worker (
    worker_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name CHAR(25) unique ,
    last_name CHAR(25),
    salary INT check (salary>1000),
    joining_date DATETIME,
    department CHAR(25)
);

INSERT INTO worker 
    (first_name, last_name, salary, joining_date, department) VALUES
    ('monika', 'arora', 100000, '2014-02-20 09:00:00', 'HR'),
    ('vishal', 'singal', 800000, '2014-02-20 09:00:00', 'HR'),
    ('amitabh', 'singh', 900000, '2014-02-20 09:00:00', 'admin'),
    ('vivek', 'bhati', 1000000, '2014-06-11 09:00:00', 'admin'),
    ('vipul', 'diwan', 170000, '2014-06-11 09:00:00', 'account'),
    ('satish', 'kumar', 140000, '2014-01-20 09:00:00', 'account'),
    ('geetika', 'chauhan', 10000, '2014-04-11 09:00:00', 'admin');

CREATE TABLE title (
    title_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    worker_ref_id INT,
    worker_title CHAR(25),
    affected_from DATETIME,
    FOREIGN KEY (worker_ref_id) REFERENCES worker(worker_id) ON DELETE CASCADE
);

INSERT INTO title
    (worker_ref_id, worker_title, affected_from) VALUES
    (1, 'manager', '2016-02-20 00:00:00'),
    (2, 'executive', '2016-06-11 00:00:00'),
    (3, 'executive', '2016-02-20 00:00:00'),
    (4, 'manager', '2016-06-11 00:00:00'),
    (5, 'asst.manager', '2016-06-11 00:00:00'),
    (6, 'executive', '2016-06-11 00:00:00'),
    (4, 'lead', '2016-06-11 00:00:00');

select first_name,salary from worker;
select 44+11;
select now();
select *from worker where salary>50000;
select *from worker where department="HR";
select *from worker where salary between 800000 and 3000000;
select *from worker where department="HR" or department="admin";
select *from worker where department in ('HR','admin');
select *from worker where department not in ('HR','admin');
select *from worker where first_name like "%i%";
select *from worker order by salary desc;
select  distinct department from worker ;
select department,max(salary) from worker group by department;
select  department ,count(department) from worker group by department;

create table account(
    id int primary key,
    name varchar(255) unique,
    balance int not null default 0
);
insert into account values
    (2,"aruna",34500),
    (4,"riya",67800),
    (6,"naman",3440);

alter table account add interest float not null default 0;
alter table account modify interest double not null default 0;
select *from account;
desc account;
alter table account change column interest  saving_interest double not  null default 0;
select *from account;
update account set name="ania" where id=2;
update account set id=id+1;
select *from account;
alter table account drop column saving_interest;
select *from account;
alter table account rename to account_details;
select *from account_details;
delete from account_details where id=3;
select *from account_details;
replace into account_details(id,name,balance) values(5,'yam',80000);
select *from account_details;
replace into account_details set id=5,name='radhya',balance=9000;
select *from account_details;