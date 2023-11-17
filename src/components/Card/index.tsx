import React from 'react'
import { Repository } from '../../services/api'

interface CardProps {
  repository: Repository
}

const Card: React.FC<CardProps> = ({ repository }) => (
  <div className="bg-gray-200 p-4 m-4 rounded-md">
    <h3 className="text-lg font-semibold text-gray-500">{repository.name}</h3>
    <p className="text-sm text-gray-600">{repository.description}</p>
  </div>
)

export default Card
