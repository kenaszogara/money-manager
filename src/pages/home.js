import React from 'react'
import { Link } from 'react-router-dom'
/** material-ui */
import { Paper, ListItem, Button } from '@material-ui/core'

/** material ui icons */
import AddIcon from '@material-ui/icons/Add'

export default function HomePage(props) {
  // overview data
  const overview = [
    {
      'name': 'Income',
      'money': 850000
    },
    {
      'name': 'Expenses',
      'money': 50000
    },
    {
      'name': 'Balance',
      'money': 800000
    }
  ]

  // item lists
  const itemLists = [
    {
      'datetime': '2020-07-15 00:00:00',
      'date': '2020-07-15',
      'totalIncome': 850000,
      'totalExpenses': 50000,
      'items': [
        {
          'name': 'Salary',
          'money': 850000,
          'category': {
            'type': 'income',
            'name': 'salary',
            'icon': 'salary.png',
          },
          'date': '2020-07-15 00:00:00',
        },
        {
          'name': 'Food',
          'money': 50000,
          'category': {
            'type': 'expense',
            'name': 'food',
            'icon': 'food.png',
          },
          'date': '2020-07-15 00:00:00',
        },
      ],
    }
  ]

  return (
    <div className='m-auto max-w-4xl' style={{ height: '89vh', position: 'relative' }}>
      {/** Overview */}
      <Paper 
        elevation={2}
        style={{
          width: '100%',
          maxWidth: '1000px',
          height: '150px',
          margin: 'auto',
          marginBottom: '26px',
          backgroundColor: '#FFF8F8',
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        { 
          overview &&
          overview.map((data, index) => {
            return (
              <ListItem key={index}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                  <p style={{ marginTop: '2em', fontSize: '14px' }}>{data.name}</p>
                  <p style={{ fontSize: '26px', fontWeight: '600', marginTop: '0.5em' }} >
                    {data.money}
                  </p>
                </div>
                {data.name !== 'Balance' && <hr />}
              </ListItem>
            )
          })
        }
      </Paper>

      {/** List */}
      {
        itemLists.length !== 0 &&
        itemLists.map((data, index) => {
          return (
            <Paper
              elevation={2}
              style={{
                width: '100%',
                maxWidth: '1000px',
                margin: 'auto',
                marginBottom: '1em',
              }}
              key={index}
            >
              <div style={{ 
                display: 'flex',
                flexDirection: 'row',
                padding: '1em',
                fontSize: '14px',
                fontWeight: '300'
              }}>
                <div style={{ marginRight: 'auto' }}>{data.date}</div>
                <div style={{ marginRight: '1em' }}>Income: {data.totalIncome}</div>
                <div>Expenses: {data.totalExpenses}</div>
              </div>
              { /** ListItems */ }
              { 
                data.items && 
                data.items.map((item, index) => {
                  return (
                    <ListItem button key={index}>
                      <div
                        style={{
                          height: '45px',
                          width: '45px',
                          borderRadius: '100%',
                          background: 'grey',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '1em',
                      }}>
                        {item.category.name}
                      </div>
                      <div
                        style={{
                          fontSize: '20px',
                          marginRight: 'auto',
                      }}>
                        {item.name}
                      </div>
                      <div style={{ fontSize: '20px' }}>{item.money}</div>
                    </ListItem>
                  )
                })
              }
            </Paper>
          )
        })
      }

      {/** add button, maybe use styled-component */}
      <Link to='/add'>
        <Button
          style={{
            width: '75px',
            height: '75px',
            borderRadius: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#FFE071',
            color: '#FFF',
            boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.25)',
            position: 'absolute',
            bottom: '0',
            right: '0'
          }}
        >
          <AddIcon />
        </Button>
      </Link>
      
    </div>
  )
}
