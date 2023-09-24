/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactQuill from 'react-quill';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSortUp,
  faSortDown,
  // faCheckSquare,
  // faBook,
  // faExclamationCircle,
  // faTrashAlt,
  // faTimes,
  // faTrashCan,
  // faXmark,
  // faUpLong,
  // faDownLong,
} from '@fortawesome/free-solid-svg-icons';
// imported components
import { users } from '../data/issueData';
import { updateIssueData } from '../store/kanbanSlice';

import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Label } from './ui/label';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

// styles
import '../../node_modules/react-quill/dist/quill.snow.css';
// types
import type { Issue } from '../data/issueData';
type ModalProps = {
  show: boolean;
  close: () => void;
  issueData: Issue;
};

const ModalComponent: React.FC<ModalProps> = (props) => {
  // overlay for modal
  const overlay = document.getElementById('overlays');

  // state handlers
  const [modalData, setModalData] = useState(props.issueData);
  useEffect(() => {
    setModalData(props.issueData);
  }, [props]);

  const dispatch = useDispatch();
  const issueType = modalData?.type;
  const issueStatus = modalData?.status;

  const changeValue = ($event: any, type: string) => {
    if (type === 'title') {
      dispatch(
        updateIssueData({
          id: modalData?.id,
          value: $event.target?.value,
          type: type,
        })
      );
      setModalData({ ...modalData, title: $event.target?.value });
    } else if ($event.target?.innerText !== undefined) {
      dispatch(
        updateIssueData({
          id: modalData?.id,
          value: $event.target?.innerText,
          type: type,
        })
      );
    }
    if (type === 'description') {
      dispatch(
        updateIssueData({ id: modalData?.id, value: $event, type: type })
      );
      setModalData({ ...modalData, description: $event });
    }
  };

  return (
    <>
      {overlay &&
        ReactDOM.createPortal(
          <Dialog open={props.show}>
            <div className='w-[80%] self-center'>
              {/* <DialogHeader>
                <div className='issue-type'>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Button
                        variant={`${
                          issueType === 'TASK'
                            ? 'default'
                            : issueType === 'STORY'
                            ? 'outline'
                            : 'destructive'
                        }`}
                      >
                        {issueType?.toUpperCase()}-{modalData?.id}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <FontAwesomeIcon
                          icon={faCheckSquare}
                          color='deepskyblue'
                        />{' '}
                        TASK
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FontAwesomeIcon icon={faBook} color='deepskyblue' />{' '}
                        STORY
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FontAwesomeIcon
                          icon={faExclamationCircle}
                          color='deepskyblue'
                        />{' '}
                        BUG
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <div className='issue-actions' onClick={props.close}>
                  <Button variant='outline'>
                    <FontAwesomeIcon icon={faTrashAlt} color='black' />
                  </Button>
                  <Button variant='outline' onClick={props.close}>
                    <FontAwesomeIcon icon={faTimes} color='black' />
                  </Button>
                </div>
              </DialogHeader> */}
              <DialogContent>
                <div className='flex'>
                  <div className='w-3/4'>
                    <ReactQuill
                      placeholder='Short Summary'
                      theme='snow'
                      style={{ height: '10rem' }}
                      className='border-none text-[1.2rem] h-[30%] resize-none w-[100%] font-semibold mb-[0.5rem]'
                      defaultValue={modalData?.title}
                      onBlur={($event) => changeValue($event, 'title')}
                    />
                    <Label>Description</Label>
                    <div className='quill'>
                      <ReactQuill
                        theme='snow'
                        className='border-none text-[1.2rem] h-[30%] resize-none w-[100%] font-semibold mb-[0.5rem]'
                        defaultValue={modalData?.description}
                        onChange={($event) =>
                          changeValue($event, 'description')
                        }
                      />
                    </div>
                  </div>
                  <div className='pl-[1rem] w-1/4'>
                    <Label className='mt-[0.5rem] mr-0 mb-[0.2rem] ml-[0.5rem]'>
                      STATUS
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button
                          variant={`${
                            issueStatus === 'inprogress'
                              ? 'default'
                              : issueStatus === 'DONE'
                              ? 'outline'
                              : 'secondary'
                          }`}
                        >
                          {issueStatus?.toUpperCase()}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>DONE</DropdownMenuItem>
                        <DropdownMenuItem>BACKLOG</DropdownMenuItem>
                        <DropdownMenuItem>
                          SELECTED FOR DEVELOPMENT
                        </DropdownMenuItem>
                        <DropdownMenuItem>IN PROGRESS</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Label className='mt-[0.5rem] mr-0 mb-[0.2rem] ml-[0.5rem]'>
                      ASSIGNEES
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button variant='outline'>{users[0].name}</Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {users.map((user) => (
                          <DropdownMenuItem key={user.name}>
                            <img
                              src={user.avatarUrl}
                              alt={user.name}
                              width='10%'
                              height='10%'
                            />
                            <label>{user.name}</label>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Label className='mt-[0.5rem] mr-0 mb-[0.2rem] ml-[0.5rem]'>
                      PRIORITY
                    </Label>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <Button
                          variant={`${
                            parseInt(modalData?.priority) > 2
                              ? 'destructive'
                              : 'outline'
                          }`}
                        >
                          {parseInt(modalData?.priority) > 2 ? 'High' : 'Low'}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <FontAwesomeIcon icon={faSortUp} color='red' />{' '}
                          Highest
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FontAwesomeIcon icon={faSortUp} color='red' /> High
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FontAwesomeIcon icon={faSortUp} color='orange' />{' '}
                          Medium
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FontAwesomeIcon icon={faSortDown} color='green' />{' '}
                          Low
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FontAwesomeIcon icon={faSortDown} color='green' />{' '}
                          Lowest
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Label className='mt-[0.5rem] mr-0 mb-[0.2rem] ml-[0.5rem]'>
                      ORIGINAL ESTIMATE (HOURS)
                    </Label>
                    <Input type='text' value='12' disabled />
                  </div>
                </div>
              </DialogContent>
            </div>
          </Dialog>,
          overlay
        )}
    </>
  );
};

export default ModalComponent;
