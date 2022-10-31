import { Form } from '../Form/Form'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import { useState } from 'react'
import style from './Chat.module.css'

export const Chat = () => {
  const [chatList, setChatList] = useState([
    {
      name: 'Max',
      id: 0,
    },
    {
      name: 'John',
      id: 1,
    },
    {
      name: 'Peter',
      id: 2,
    },
    {
      name: 'Lisa',
      id: 3,
    },
  ])

  return (
    <div className={style.chat}>
      <List
        dense
        className={style.chatList}
        sx={{ width: '100%', maxWidth: 200 }}
      >
        {chatList.map((item, id) => {
          const labelId = `checkbox-list-secondary-label-${item.id}`

          return (
            <ListItem key={id} disablePadding>
              <ListItemButton>
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${item.id + 1}`}
                    src={`/static/images/avatar/${item.id + 1}.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText id={labelId} primary={`${item.name}`} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <Form />
    </div>
  )
}
