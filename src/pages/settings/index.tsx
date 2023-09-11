import { useEffect } from 'react'
import PreferenceService from '../../services/PreferenceService'

function SettingsPage(){
  useEffect(() => {
    (async() => {
      const service = new PreferenceService({});
      const response = await service.index();
      console.log(response)
    })()
  }, []);

  return (
    <>
      Settings Page
    </>
  )
}

export default SettingsPage
