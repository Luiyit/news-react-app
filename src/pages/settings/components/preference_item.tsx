import React, { useCallback } from 'react'
import { PreferenceType } from '../../../types/entities'
import { Div, Flex } from '../../../components/styled/blocks'
import PreferenceService from '../../../services/PreferenceService'
import { Button } from 'antd'

const PreferenceItem = ({ preference, onDelete }: { preference: PreferenceType, onDelete: (item: PreferenceType) => void }) => {

  const deletePreference = useCallback(async () => {
    const service = new PreferenceService({});
    await service.delete(preference.id);
    onDelete(preference);
  }, [preference, onDelete])

  return (
    <Flex justify='space-between' borderB="1px solid #eee" padding="10px 5px">
      <Div>{ preference.preferable.name }</Div>
      <Button onClick={() => deletePreference()} type="primary" danger>Delete</Button>
    </Flex>
  )
}

export default PreferenceItem
