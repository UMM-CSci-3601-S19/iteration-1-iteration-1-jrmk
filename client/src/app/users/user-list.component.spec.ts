// import {ComponentFixture, TestBed, async} from '@angular/core/testing';
// import {User} from './user';
// import {UserListComponent} from './user-list.component';
// import {UserListService} from './user-list.service';
// import {Observable} from 'rxjs/Observable';
// import {FormsModule} from '@angular/forms';
// import {CustomModule} from '../custom.module';
// import {MatDialog} from '@angular/material';
//
// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/do';
//
// describe('User list', () => {
//
//   let userList: UserListComponent;
//   let fixture: ComponentFixture<UserListComponent>;
//
//   let userListServiceStub: {
//     getUsers: () => Observable<User[]>
//   };
//
//   beforeEach(() => {
//     // stub UserService for test purposes
//     userListServiceStub = {
//       getUsers: () => Observable.of([
//         {
//           _id: 'chris_id',
//           name: 'Chris',
//           vehicles: 'Ford',
//           phone: '3335555555',
//           email: 'chris@this.that'
//         },
//         {
//           _id: 'pat_id',
//           name: 'Pat',
//           vehicles: 'Chevy',
//           phone: '4445555555',
//           email: 'pat@something.com'
//         },
//         {
//           _id: 'jamie_id',
//           name: 'Jamie',
//           age: 37,
//           phone: '5555555555',
//           email: 'jamie@frogs.com'
//         }
//       ])
//     };
//
//     TestBed.configureTestingModule({
//       imports: [CustomModule],
//       declarations: [UserListComponent],
//       // providers:    [ UserListService ]  // NO! Don't provide the real service!
//       // Provide a test-double instead
//       providers: [{provide: UserListService, useValue: userListServiceStub}]
//     });
//   });
//
//   beforeEach(async(() => {
//     TestBed.compileComponents().then(() => {
//       fixture = TestBed.createComponent(UserListComponent);
//       userList = fixture.componentInstance;
//       fixture.detectChanges();
//     });
//   }));
//
//   it('contains all the users', () => {
//     expect(userList.users.length).toBe(3);
//   });
//
//   it('contains a user named \'Chris\'', () => {
//     expect(userList.users.some((user: User) => user.name === 'Chris')).toBe(true);
//   });
//
//   it('contain a user named \'Jamie\'', () => {
//     expect(userList.users.some((user: User) => user.name === 'Jamie')).toBe(true);
//   });
//
//   it('doesn\'t contain a user named \'Santa\'', () => {
//     expect(userList.users.some((user: User) => user.name === 'Santa')).toBe(false);
//   });
//
//   it('user list filters by name', () => {
//     expect(userList.filteredUsers.length).toBe(3);
//     userList.userName = 'a';
//     userList.refreshUsers().subscribe(() => {
//       expect(userList.filteredUsers.length).toBe(2);
//     });
//   });
//
//   // it('user list filters by age', () => {
//   //   expect(userList.filteredUsers.length).toBe(3);
//   //   userList.userAge = 37;
//   //   userList.refreshUsers().subscribe(() => {
//   //     expect(userList.filteredUsers.length).toBe(2);
//   //   });
//   // });
//
//   // it('user list filters by name and age', () => {
//   //   expect(userList.filteredUsers.length).toBe(3);
//   //   userList.userAge = 37;
//   //   userList.userName = 'i';
//   //   userList.refreshUsers().subscribe(() => {
//   //     expect(userList.filteredUsers.length).toBe(1);
//   //   });
//   // });
//
// });
//
// describe('Misbehaving User List', () => {
//   let userList: UserListComponent;
//   let fixture: ComponentFixture<UserListComponent>;
//
//   let userListServiceStub: {
//     getUsers: () => Observable<User[]>
//   };
//
//   beforeEach(() => {
//     // stub UserService for test purposes
//     userListServiceStub = {
//       getUsers: () => Observable.create(observer => {
//         observer.error('Error-prone observable');
//       })
//     };
//
//     TestBed.configureTestingModule({
//       imports: [FormsModule, CustomModule],
//       declarations: [UserListComponent],
//       providers: [{provide: UserListService, useValue: userListServiceStub}]
//     });
//   });
//
//   beforeEach(async(() => {
//     TestBed.compileComponents().then(() => {
//       fixture = TestBed.createComponent(UserListComponent);
//       userList = fixture.componentInstance;
//       fixture.detectChanges();
//     });
//   }));
//
//   it('generates an error if we don\'t set up a UserListService', () => {
//     // Since the observer throws an error, we don't expect users to be defined.
//     expect(userList.users).toBeUndefined();
//   });
// });
//
//
// // describe('Adding a user', () => {
// //   let userList: UserListComponent;
// //   let fixture: ComponentFixture<UserListComponent>;
// //   const newUser: User = {
// //     _id: '',
// //     name: 'Sam',
// //     age: 67,
// //     company: 'Things and stuff',
// //     email: 'sam@this.and.that'
// //   };
// //   const newId = 'sam_id';
// //
// //   let calledUser: User;
// //
// //   let userListServiceStub: {
// //     getUsers: () => Observable<User[]>,
// //     addNewUser: (newUser: User) => Observable<{ '$oid': string }>
// //   };
// //   let mockMatDialog: {
// //     open: (AddUserComponent, any) => {
// //       afterClosed: () => Observable<User>
// //     };
// //   };
// //
// //   beforeEach(() => {
// //     calledUser = null;
// //     // stub UserService for test purposes
// //     userListServiceStub = {
// //       getUsers: () => Observable.of([]),
// //       addNewUser: (newUser: User) => {
// //         calledUser = newUser;
// //         return Observable.of({
// //           '$oid': newId
// //         });
// //       }
// //     };
// //     mockMatDialog = {
// //       open: () => {
// //         return {
// //           afterClosed: () => {
// //             return Observable.of(newUser);
// //           }
// //         };
// //       }
// //     };
// //
// //     TestBed.configureTestingModule({
// //       imports: [FormsModule, CustomModule],
// //       declarations: [UserListComponent],
// //       providers: [
// //         {provide: UserListService, useValue: userListServiceStub},
// //         {provide: MatDialog, useValue: mockMatDialog},
// //       ]
// //     });
// //   });
// //
// //   beforeEach(async(() => {
// //     TestBed.compileComponents().then(() => {
// //       fixture = TestBed.createComponent(UserListComponent);
// //       userList = fixture.componentInstance;
// //       fixture.detectChanges();
// //     });
// //   }));
// //
// //   it('calls UserListService.addUser', () => {
// //     expect(calledUser).toBeNull();
// //     userList.openDialog();
// //     expect(calledUser).toEqual(newUser);
// //   });
// // });
