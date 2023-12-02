import { prefecture, searchAttr } from "@/libs/search-options/searchOptions"
import { PrimaryButton } from "../atoms/button/Primary"
import { Select } from "../atoms/select/Select"


export const SearchArea = (): JSX.Element => {
    return (
        <form className='space-y-3 p-3 bg-white rounded-md'>
            <Select {...{ list: prefecture() }} />
            <Select {...{ list: searchAttr() }} />
            <PrimaryButton {...{ text: '案件を探す' }} />
        </form>
    )
}