export const data = [

          {
            id: 'client_id',
            type: 'text',
            name: 'client_id',
            stream:'LinkedIn',
            header: 'credentials',
            label: 'Client ID',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'client_secret',

            type: 'text',

            name: 'client_secret',
            stream:'LinkedIn',
            value: '',
            header: 'credentials',
            label: 'Client Secret',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'redirect_uri',

            type: 'text',

            name: 'redirect_uri',
            stream:'LinkedIn',
            value: '',
            header: 'credentials',
            label: 'Redirect URI',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'token_url',

            type: 'text',

            name: 'token_url',
            stream:'LinkedIn',
            value: '',
            header: 'credentials',
            label: 'Token URL',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'base_url',

            type: 'text',

            name: 'base_url',
            stream:'LinkedIn',
            value: '',
            header: 'credentials',
            label: 'Base URL',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'authorization_url',

            type: 'text',

            name: 'authorization_url',
            stream:'LinkedIn',
            value: '',
            header: 'credentials',
            label: 'Authorization URL',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'organization_URN',

            type: 'text',

            name: 'organization_URN',
            stream:'Youtube',
            value: '',
            header: 'parameters',
            label: 'Organization URN',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'organization_id',

            type: 'text',

            name: 'organization_id',
            stream:'Youtube',
            value: '',
            header: 'parameters',
            label: 'Organization ID',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'start_time',

            type: 'text',

            name: 'start_time',
            stream:'Youtube',
            value: '',
            header: 'parameters',
            label: 'Start Time',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'end_time',

            type: 'text',

            name: 'end_time',
            stream:['Youtube','LinkedIn'],
            value: '',
            header: 'parameters',
            label: 'End Time',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'headers',

            type: 'text',

            name: 'headers',
            stream:'Youtube',
            value: '',
            header: 'parameters',
            label: ' Headers',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },

          {
            id: 'data',

            type: 'text',

            name: 'data',
            stream:'Youtube',
            value: '',
            header: 'parameters',
            label: 'Data',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },
          {
            id: 'LifeTime',

            type: 'select',

            name: 'life_tym',
            stream:['Youtube','LinkedIn'],
            value: '',
            header: 'Endpoint',
            label: 'LifeTime',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },
          {
            id: 'TimeBound',

            type: 'select',

            name: 'time_bound',
            stream:['Youtube','LinkedIn'],
            value: '',
            header: 'Endpoint',
            label: 'TimeBound',
            
            "validator": {
              "required": true
              },
              "initialValue": ""
          },
        
        ]

        export const endpoint = [
          {
            label:"lifetime_follow_stat",
            value:"organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity={organization_URN}",
            stream:"LinkedIn",
            type:"LifeTime"


          },
          {
            label:"memb_org_access_ctrl",
            value:"organizationAcls?q=roleAssignee",
            stream:"LinkedIn",
            type:"LifeTime"


          },
          {
            label:"timebound_org_page_stat",
            value:"organizationPageStatistics?q=organization&organization={organization_URN}&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start={start_time}&timeIntervals.timeRange.end={end_time}",
            stream:"Youtube",
            type:"TimeBound"


          },
          {
            label:"timebound_share_stat",
            value:"organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity={organization_URN}&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start={start_time}&timeIntervals.timeRange.end={end_time}",
            stream:"LinkedIn",
            type:"TimeBound"


          }

        ]

     