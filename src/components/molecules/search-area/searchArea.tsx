import { PrimaryButton } from "@/components/atoms/button/Primary"
import { Select } from "@/components/atoms/select/Select"
import { prefecture, searchAttr } from "@/libs/search-options/searchOptions"

export const SearchArea = (): JSX.Element => {
    return (
        <form className='space-y-3 p-3 bg-white rounded-md'>
            <Select {...{ list: prefecture() }} />
            <Select {...{ list: searchAttr() }} />
            <PrimaryButton {...{ text: '案件を探す' }} />
        </form>
    )
}